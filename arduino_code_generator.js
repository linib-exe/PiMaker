Blockly.JavaScript['setup_block'] = function(block) {
    const setupCode = Blockly.JavaScript.statementToCode(block, 'SETUP_CODE');
    return `void setup() {\n${setupCode}}\n`;
};

Blockly.JavaScript['loop_block'] = function(block) {
    const loopCode = Blockly.JavaScript.statementToCode(block, 'LOOP_CODE');
    return `void loop() {\n${loopCode}}\n`;
};

Blockly.JavaScript['pin_setup'] = function(block) {
    const pin = block.getFieldValue('PIN');
    const mode = block.getFieldValue('MODE');
    return `pinMode(${pin}, ${mode});\n`;
};

Blockly.JavaScript['led_control'] = function(block) {
    const pin = block.getFieldValue('PIN');
    const state = block.getFieldValue('STATE');
    return `digitalWrite(${pin}, ${state});\n`;
};

Blockly.JavaScript['bluetooth_init'] = function(block) {
    const baudRate = block.getFieldValue('BAUD');
    return `Serial.begin(${baudRate});\n`;
};

Blockly.JavaScript['bluetooth_send'] = function(block) {
    const message = block.getFieldValue('MESSAGE');
    return `Serial.println("${message}");\n`;
};

Blockly.JavaScript['delay_block'] = function(block) {
    const delayTime = block.getFieldValue('DELAY_TIME');
    return `delay(${delayTime});\n`;
};

Blockly.JavaScript['if_then_block'] = function(block) {
    const condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    const doBranch = Blockly.JavaScript.statementToCode(block, 'DO');
    return `if (${condition}) {\n${doBranch}}\n`;
};

Blockly.JavaScript['if_else_if_else_block'] = function(block) {
    const if0 = Blockly.JavaScript.valueToCode(block, 'IF0', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    const do0 = Blockly.JavaScript.statementToCode(block, 'DO0');
    const if1 = Blockly.JavaScript.valueToCode(block, 'IF1', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    const do1 = Blockly.JavaScript.statementToCode(block, 'DO1');
    const elseBranch = Blockly.JavaScript.statementToCode(block, 'ELSE');

    let code = `if (${if0}) {\n${do0}}\n`;
    code += `else if (${if1}) {\n${do1}}\n`;
    code += `else {\n${elseBranch}}\n`;
    return code;
};

Blockly.JavaScript['boolean_block'] = function(block) {
    const value = block.getFieldValue('BOOLEAN');
    return [value, Blockly.JavaScript.ORDER_ATOMIC];
};

// Serial Available Block (Returns true if data is available)
Blockly.JavaScript['serial_available'] = function(block) {
    return ['Serial.available()', Blockly.JavaScript.ORDER_ATOMIC];
};

// Serial Read Block (Reads data from serial buffer)
Blockly.JavaScript['serial_read'] = function(block) {
    return ['Serial.read()', Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['comparison_block'] = function(block) {
    const a = Blockly.JavaScript.valueToCode(block, 'A', Blockly.JavaScript.ORDER_ATOMIC);
    const b = Blockly.JavaScript.valueToCode(block, 'B', Blockly.JavaScript.ORDER_ATOMIC);
    const op = block.getFieldValue('OP');

    let operator;
    switch (op) {
        case 'LT':
            operator = '<';
            break;
        case 'GT':
            operator = '>';
            break;
        case 'EQ':
            operator = '==';
            break;
        default:
            operator = '==';
    }

    return [`${a} ${operator} ${b}`, Blockly.JavaScript.ORDER_ATOMIC];
};
