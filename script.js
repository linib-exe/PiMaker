const workspace = Blockly.inject('blocklyDiv', {
    toolbox: `
        <xml xmlns="https://developers.google.com/blockly/xml">
            <!-- Category: Basic -->
            <category name="Basic" colour="210">
                <block type="setup_block"></block>
                <block type="loop_block"></block>
                <block type="delay_block"></block>
                <block type="text"></block>
            </category>

            <category name="Loop" colour="210">
                <block type="while_loop"></block>
                <block type="for_loop"></block>
            </category>

            <!-- Category: Logic -->
            <category name="Logic" colour="120">
                <block type="if_then_block"></block>
                <block type="if_else_if_else_block"></block>
                <block type="if_else_if_block"></block>
                <block type="boolean_block"></block>
                <block type="comparison_block"></block>
            </category>

            <!-- Category: Variables -->
            <category name="Variables" colour="330">
                <block type="variable_declaration"></block>
                <block type="integer"></block>
                <block type="variable_name"></block>
            </category>

            <!-- Category: Pin Control -->
            <category name="Pin Control" colour="160">
                <block type="pin_setup"></block>
                <block type="led_control"></block>
            </category>

            <!-- Category: Bluetooth -->
            <category name="Bluetooth" colour="300">
                <block type="bluetooth_init"></block>
                <block type="bluetooth_send"></block>
            </category>

                      
            <category name="Serial Communication" colour="230">
                <block type="serial_available"></block>
                <block type="serial_read"></block>
                <block type="serial_print"></block>
                <block type="serial_println"></block>
            </category>

            <category name="Servo Control" colour="160">
             <block type="servo_header"></block>
            <block type="servo_object"></block>
            <block type="servo_control"></block>
            </category>

            <category name="Analog I/O" colour="180">
                <block type="analog_read"></block>  <!-- Analog Read Block -->
                <block type="analog_write"></block>
            </category>

            <category name="Digital I/O" colour="160">
                <block type="digital_read"></block>  <!-- Digital Read Block -->
                <block type="digital_write"></block> <!-- Digital Write Block -->
                <block type="digital_read_comparison"></block>
            </category>
        </xml>


    `
});


// Function to generate and display code
const generateCode = () => {
    try {
        const code = Blockly.JavaScript.workspaceToCode(workspace);
        document.getElementById('outputCode').textContent = code || 'No blocks in workspace!';
    } catch (error) {
        document.getElementById('outputCode').textContent = `Error generating code: ${error.message}`;
    }
};

// Add a change listener to the workspace to auto-generate code
workspace.addChangeListener(generateCode);

// Initial code generation to show default state
generateCode();

// Copy code to clipboard
document.getElementById('copyCode').addEventListener('click', () => {
    const code = document.getElementById('outputCode').textContent;
    if (code.trim()) {
        navigator.clipboard.writeText(code)
            .then(() => alert('Code copied to clipboard!'))
            .catch(err => alert('Failed to copy code: ' + err));
    } else {
        alert('No code to copy!');
    }
});

// Download code as .ino file
document.getElementById('downloadCode').addEventListener('click', () => {
    const code = document.getElementById('outputCode').textContent;
    if (code.trim()) {
        const blob = new Blob([code], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'arduino_program.ino'; // File name for download
        a.click();
        URL.revokeObjectURL(url);
    } else {
        alert('No code to download!');
    }
});
