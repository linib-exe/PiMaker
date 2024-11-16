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
        case 'NEQ':
            operator = '!=';
            break;
        default:
            operator = '==';
    }

    return [`${a} ${operator} ${b}`, Blockly.JavaScript.ORDER_ATOMIC];
};



// Servo Control Block (Generates code to set servo angle)
Blockly.JavaScript['servo_control'] = function(block) {
    const pin = block.getFieldValue('PIN');
    const angle = block.getFieldValue('ANGLE');
    return `servo${pin}.write(${angle});\n`;
};

// Servo Object Block (Generates code to create a Servo object and attach it to a pin)
Blockly.JavaScript['servo_object'] = function(block) {
    const pin = block.getFieldValue('PIN');
    const servoVariable = `servo${pin}`;  // Generate a unique variable name for each servo
    return [`Servo ${servoVariable};`, Blockly.JavaScript.ORDER_ATOMIC];
};

// Servo Header Block (Generates code to include the Servo library)
Blockly.JavaScript['servo_header'] = function(block) {
    return '#include <Servo.h>'
};

// Analog Read Block (Generates code for reading an analog value from the pin)
Blockly.JavaScript['analog_read'] = function(block) {
    const pin = block.getFieldValue('PIN');
    return [`analogRead(${pin})`, Blockly.JavaScript.ORDER_ATOMIC];
};

// Analog Write Block (Generates code to write a PWM value to the specified pin)
Blockly.JavaScript['analog_write'] = function(block) {
    const pin = block.getFieldValue('PIN');
    const value = block.getFieldValue('VALUE');
    return `analogWrite(${pin}, ${value});\n`;
};

// Digital Read Block (Generates code for reading a digital value from the pin)
Blockly.JavaScript['digital_read'] = function(block) {
    const pin = block.getFieldValue('PIN');
    return [`digitalRead(${pin})`, Blockly.JavaScript.ORDER_ATOMIC];  // Return HIGH or LOW
};



// Digital Write Block (Generates code for writing a digital value to the pin)
Blockly.JavaScript['digital_write'] = function(block) {
    const pin = block.getFieldValue('PIN');
    const value = block.getFieldValue('VALUE');
    return `digitalWrite(${pin}, ${value});\n`;  // Write HIGH or LOW to the pin
};
Blockly.JavaScript['digital_read_comparison'] = function(block) {
    const pin = block.getFieldValue('PIN');  // Get the pin number
    const operator = block.getFieldValue('OPERATOR');  // Get the comparison operator
    const value = block.getFieldValue('VALUE');  // Get the value to compare with (HIGH or LOW)

    // Generate the operator for the comparison
    let operatorCode;
    switch (operator) {
        case 'EQ':
            operatorCode = '==';
            break;
        case 'NEQ':
            operatorCode = '!=';
            break;
        case 'GT':
            operatorCode = '>';
            break;
        case 'LT':
            operatorCode = '<';
            break;
        default:
            operatorCode = '==';
    }

    // Generate the code for digitalRead and comparison
    return [`digitalRead(${pin}) ${operatorCode} ${value}`, Blockly.JavaScript.ORDER_ATOMIC];
};
Blockly.JavaScript['while_loop'] = function(block) {
    const condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC) || 'false';  // Get the condition for the loop
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');  // Get the statements inside the loop
    return `while (${condition}) {\n${statements}}\n`;  // Generate the while loop code
};
Blockly.JavaScript['for_loop'] = function(block) {
    const init = Blockly.JavaScript.valueToCode(block, 'INIT', Blockly.JavaScript.ORDER_ATOMIC) || 'int i = 0';  // Get initialization code (e.g., `int i = 0`)
    const condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC) || 'i < 10';  // Get the condition (e.g., `i < 10`)
    const increment = Blockly.JavaScript.valueToCode(block, 'INCREMENT', Blockly.JavaScript.ORDER_ATOMIC) || 'i++';  // Get the increment (e.g., `i++`)
    const statements = Blockly.JavaScript.statementToCode(block, 'DO');  // Get the statements inside the loop

    // Return the generated code
    return `for (${init}; ${condition}; ${increment}) {\n${statements}}\n`;
};
Blockly.JavaScript['serial_print'] = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);  // Get the value to be printed
    return `Serial.print(${value});\n`;  // Generate the Serial.print() code
};
Blockly.JavaScript['serial_println'] = function(block) {
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ATOMIC);  // Get the value to be printed
    return `Serial.println(${value});\n`;  // Generate the Serial.println() code
};
Blockly.JavaScript['text'] = function(block) {
    const textValue = block.getFieldValue('TEXT');  // Get the text value from the input field
    return [`"${textValue}"`, Blockly.JavaScript.ORDER_ATOMIC];  // Generate the corresponding JavaScript code for the text
};
Blockly.JavaScript['variable_declaration'] = function(block) {
    const dataType = block.getFieldValue('DATA_TYPE');  // Get the selected data type (e.g., int, float)
    const varName = block.getFieldValue('VAR_NAME');  // Get the variable name (e.g., myVar)
    const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';  // Get the value, default to '0' if empty

    // Generate the correct variable declaration with no extra semicolon after newline
    return `${dataType} ${varName} = ${value};\n`  // Ensure semicolon is only after the declaration
};

Blockly.JavaScript['integer'] = function(block) {
    const value = block.getFieldValue('VALUE');  // Get the value entered in the field
    return [value, Blockly.JavaScript.ORDER_ATOMIC];  // Return the integer value with appropriate precedence
};
Blockly.JavaScript['variable_name'] = function(block) {
    const varName = block.getFieldValue('VAR_NAME');  // Get the variable name entered by the user
    return [varName, Blockly.JavaScript.ORDER_ATOMIC];  // Return the variable name as a string
};
Blockly.JavaScript['if_else_if_block'] = function(block) {
    const if0 = Blockly.JavaScript.valueToCode(block, 'IF0', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    const do0 = Blockly.JavaScript.statementToCode(block, 'DO0');
    const if1 = Blockly.JavaScript.valueToCode(block, 'IF1', Blockly.JavaScript.ORDER_ATOMIC) || 'false';
    const do1 = Blockly.JavaScript.statementToCode(block, 'DO1');

    let code = `if (${if0}) {\n${do0}}\n`;  // Generate the 'if' block code
    code += `else if (${if1}) {\n${do1}}\n`;  // Generate the 'else if' block code
    return code;
};



