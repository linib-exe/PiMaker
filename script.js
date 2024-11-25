// Initialize Blockly workspace
const workspace = Blockly.inject('blocklyDiv', {
    toolbox: `
        <xml xmlns="https://developers.google.com/blockly/xml">
            <category name="Basic" colour="210">
                <block type="setup_block"></block>
                <block type="loop_block"></block>
                <block type="delay_block"></block>
                <block type="text"></block>
                <block type="delay_microseconds"></block>
                <block type="comment_block"></block>
            </category>

            <category name="Loop" colour="210">
                <block type="while_loop"></block>
                <block type="for_loop"></block>
            </category>

            <category name="Logic" colour="120">
                <block type="if_then_block"></block>
                <block type="else_if_block"></block>
                <block type="else_block"></block>
                <block type="boolean_block"></block>
                <block type="comparison_block"></block>
            </category>

            <category name="Variables" colour="330">
                <block type="variable_declaration"></block>
                <block type="variable_name"></block>
                <block type="variable_assignment"></block>
                <block type="variable_declaration2"></block>
            </category>

            <category name="Pin Control" colour="160">
                <block type="led_control"></block>
                <block type="pin_setup"></block>
            </category>

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
                <block type="analog_read"></block>
                <block type="analog_write"></block>
            </category>

            <category name="Digital I/O" colour="160">
                <block type="digital_read"></block>
                <block type="digital_write"></block>
                <block type="digital_read_comparison"></block>
            </category>

            <category name="Ultrasonic Sensor" colour="160">
                <block type="pulsein_block"></block>
            </category>

            <category name="Functions" colour="230">
                <block type="map_function"></block>
                <block type="function_definition"></block>
                <block type="function_call"></block>
            </category>

            <category name="Motion" colour="230">
                <block type="motion_forward"></block>
                <block type="motion_backward"></block>
                <block type="motion_left"></block>
                <block type="motion_right"></block>
                <block type="motion_stop"></block>
            </category>
        </xml>
    `
});

// Function to generate and display code
const generateCode = () => {
    try {
        const code = Blockly.JavaScript.workspaceToCode(workspace);
        const outputElement = document.getElementById('outputCode');
        outputElement.textContent = code || 'No blocks in workspace!';
    } catch (error) {
        document.getElementById('outputCode').textContent = `Error generating code: ${error.message}`;
    }
};


// Add a change listener to the workspace to auto-generate code
workspace.addChangeListener(generateCode);

// Initial code generation to show default state
generateCode();

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

// Function to save the entire workspace as a .pimaker file
function saveWorkspace() {
    const xml = Blockly.Xml.workspaceToDom(workspace);  // Convert the workspace to XML
    const xmlText = Blockly.Xml.domToText(xml);  // Convert the XML DOM to a text string

    // Ask the user for the filename (without extension)
    const filename = prompt("Enter a filename for your workspace:", "workspace");

    // If the user enters a filename, proceed with saving
    if (filename) {
        // Ensure the filename has the correct extension (.pimaker)
        const fullFilename = filename.endsWith('.pimaker') ? filename : filename + '.pimaker';

        // Create a Blob with the XML data and make it downloadable
        const blob = new Blob([xmlText], { type: 'application/octet-stream' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fullFilename;  // Use the provided filename with the .pimaker extension
        link.click();  // Trigger the download

        alert(`Workspace saved as ${fullFilename}`);
    } else {
        alert('Please provide a filename.');
    }
}



function loadWorkspace() {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = '.pimaker';  

    // Listen for the file being selected
    fileInput.addEventListener('change', async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = function(event) {
            const xmlText = event.target.result;
            const xml = Blockly.Xml.textToDom(xmlText);
            Blockly.Xml.domToWorkspace(xml, workspace);  // Load the XML into the workspace

            alert("Workspace loaded!");
        };

        reader.readAsText(file);  
    });

    fileInput.click();  // Trigger the file input dialog
}


// Event listener for the "Save Workspace" button
document.getElementById('saveWorkspaceButton').addEventListener('click', saveWorkspace);

// Event listener for the "Load Workspace" button
document.getElementById('loadWorkspaceButton').addEventListener('click', loadWorkspace);

document.getElementById('toggleOutput').addEventListener('click', function() {
    const outputSection = document.getElementById('outputSection');
    
    // Toggle the visibility of the output section
    if (outputSection.style.display === 'none' || outputSection.style.display === '') {
        outputSection.style.display = 'block';  // Show the section
    } else {
        outputSection.style.display = 'none';  // Hide the section
    }
});


