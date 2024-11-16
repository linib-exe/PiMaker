Blockly.defineBlocksWithJsonArray([
    {
        "type": "setup_block",
        "message0": "Setup",
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "SETUP_CODE"
            }
        ],
        "colour": 290,
        "tooltip": "Code that runs once at startup",
        "helpUrl": ""
    },
    {
        "type": "loop_block",
        "message0": "Loop",
        "message1": "%1",
        "args1": [
            {
                "type": "input_statement",
                "name": "LOOP_CODE"
            }
        ],
        "colour": 120,
        "tooltip": "Code that runs repeatedly",
        "helpUrl": ""
    },
    {
        "type": "pin_setup",
        "message0": "Set pin %1 mode %2",
        "args0": [
            {
                "type": "field_number",
                "name": "PIN",
                "value": 13,
                "min": 0
            },
            {
                "type": "field_dropdown",
                "name": "MODE",
                "options": [
                    ["OUTPUT", "OUTPUT"],
                    ["INPUT", "INPUT"]
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 160,
        "tooltip": "Set pin mode (INPUT or OUTPUT)",
        "helpUrl": ""
    },
    {
        "type": "led_control",
        "message0": "Set pin %1 to state %2",
        "args0": [
            {
                "type": "field_number",
                "name": "PIN",
                "value": 13,
                "min": 0
            },
            {
                "type": "field_dropdown",
                "name": "STATE",
                "options": [
                    ["HIGH", "HIGH"],
                    ["LOW", "LOW"]
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 230,
        "tooltip": "Set pin state (HIGH or LOW)",
        "helpUrl": ""
    },
    {
        "type": "bluetooth_init",
        "message0": "Initialize Bluetooth with baud rate %1",
        "args0": [
            {
                "type": "field_number",
                "name": "BAUD",
                "value": 9600,
                "min": 0
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 300,
        "tooltip": "Initialize Bluetooth module (e.g., HC-05) with a baud rate",
        "helpUrl": ""
    },
    {
        "type": "bluetooth_send",
        "message0": "Send Bluetooth message %1",
        "args0": [
            {
                "type": "field_input",
                "name": "MESSAGE",
                "text": "Hello"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 300,
        "tooltip": "Send a message via Bluetooth",
        "helpUrl": ""
    },
    {
        "type": "delay_block",
        "message0": "Delay %1 ms",
        "args0": [
            {
                "type": "field_number",
                "name": "DELAY_TIME",
                "value": 1000,
                "min": 0
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Delay for a specified time in milliseconds",
        "helpUrl": ""
    },
    {
        "type": "if_then_block",
        "message0": "if %1 then %2",
        "args0": [
            {
                "type": "input_value",
                "name": "CONDITION",
                "check": "Boolean"
            },
            {
                "type": "input_statement",
                "name": "DO"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 210,
        "tooltip": "If a condition is true, then do some statements",
        "helpUrl": ""
    },
    {
        "type": "variable_set",
        "message0": "set variable %1 to %2",
        "args0": [
            {
                "type": "field_variable",
                "name": "VAR",
                "variable": "item" // Default variable name
            },
            {
                "type": "input_value",
                "name": "VALUE"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 330,
        "tooltip": "Set a variable to a specified value",
        "helpUrl": ""
    },
    {
        "type": "if_else_if_else_block",
        "message0": "if %1 then %2",
        "args0": [
            {
                "type": "input_value",
                "name": "IF0",
                "check": "Boolean"
            },
            {
                "type": "input_statement",
                "name": "DO0"
            }
        ],
        "message1": "else if %1 then %2",
        "args1": [
            {
                "type": "input_value",
                "name": "IF1",
                "check": "Boolean"
            },
            {
                "type": "input_statement",
                "name": "DO1"
            }
        ],
        "message2": "else %1",
        "args2": [
            {
                "type": "input_statement",
                "name": "ELSE"
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 210,
        "tooltip": "If-Else If-Else conditional block",
        "helpUrl": ""
    },
    {
        "type": "boolean_block",
        "message0": "%1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "BOOLEAN",
                "options": [
                    ["true", "true"],
                    ["false", "false"]
                ]
            }
        ],
        "output": "Boolean",
        "colour": 210,
        "tooltip": "Returns true or false",
        "helpUrl": ""
    },

        // Serial Available Block
        {
            "type": "serial_available",
            "message0": "Serial available",
            "output": "Boolean",
            "colour": 230,
            "tooltip": "Check if data is available on the serial buffer",
            "helpUrl": ""
        },
        // Serial Read Block
        {
            "type": "serial_read",
            "message0": "Read serial data",
            "output": "Number",
            "colour": 230,
            "tooltip": "Read data from the serial buffer",
            "helpUrl": "",
            
        },

        {
            "type": "comparison_block",
            "message0": "%1 %2 %3",
            "args0": [
                {
                    "type": "input_value",
                    "name": "A",
                    "check": ["Boolean", "Number","String"]  // Allow comparison of both booleans and numbers
                },
                {
                    "type": "field_dropdown",
                    "name": "OP",
                    "options": [
                        ["<", "LT"],
                        [">", "GT"],
                        ["==", "EQ"],
                        ["!=", "NEQ"]
                    ]
                },
                {
                    "type": "input_value",
                    "name": "B",
                    "check": ["Boolean", "Number","String"]  // Allow comparison of both booleans and numbers
                },
 
            ],
            "output": "Boolean",
            "colour": 210,
            "tooltip": "Compares two values (either numbers or booleans)",
            "helpUrl": ""
        },

        {
            "type": "servo_control",
            "message0": "Set servo on pin %1 to angle %2",
            "args0": [
                {
                    "type": "field_number",
                    "name": "PIN",
                    "value": 9, // Default pin for servo
                    "min": 0
                },
                {
                    "type": "field_angle",
                    "name": "ANGLE",
                    "angle": 90
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 120,
            "tooltip": "Set the servo motor to a specific angle on the given pin",
            "helpUrl": ""
        },
        {
            "type": "servo_object",
            "message0": "Create servo object on pin %1",
            "args0": [
                {
                    "type": "field_number",
                    "name": "PIN",
                    "value": 9,  // Default pin for servo
                    "min": 0
                }
            ],
            "output": "Servo",
            "colour": 120,
            "tooltip": "Create a Servo object and attach it to the specified pin",
            "helpUrl": ""
        },

        {
            "type": "servo_header",
            "message0": "#include <Servo.h>",
            "output": null,
            "colour": 230,
            "tooltip": "Include the Servo library for controlling servos",
            "helpUrl": ""
        },

        {
            "type": "analog_read",
            "message0": "Read analog value from pin %1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "PIN",
                    "options": [
                        ["A0", "A0"],
                        ["A1", "A1"],
                        ["A2", "A2"],
                        ["A3", "A3"],
                        ["A4", "A4"],
                        ["A5", "A5"]
                    ]
                }
            ],
            "output": "Number", // The block outputs a number (the analog reading)
            "colour": 180,
            "tooltip": "Reads the analog value from the specified pin (0-1023)",
            "helpUrl": ""
        },

        {
            "type": "analog_write",
            "message0": "Write analog value %1 to pin %2",
            "args0": [
                {
                    "type": "field_number",
                    "name": "VALUE",
                    "value": 128,
                    "min": 0,
                    "max": 255
                },
                {
                    "type": "field_dropdown",
                    "name": "PIN",
                    "options": [
                        ["9", "9"],
                        ["10", "10"],
                        ["11", "11"],
                        ["3", "3"],
                        ["5", "5"],
                        ["6", "6"]
                    ]
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 160,
            "tooltip": "Write a PWM value (0 to 255) to the specified pin",
            "helpUrl": ""
        },

        {
            "type": "digital_read",
            "message0": "Read digital value from pin %1",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "PIN",
                    "options": [
                        ["2", "2"],
                        ["3", "3"],
                        ["4", "4"],
                        ["5", "5"],
                        ["6", "6"],
                        ["7", "7"],
                        ["8", "8"],
                        ["9", "9"],
                        ["10", "10"]
                    ]
                }
            ],
            "output": "Boolean",  // The output is a Boolean (HIGH or LOW)
            "colour": 160,
            "tooltip": "Reads the digital value (HIGH or LOW) from the specified pin",
            "helpUrl": ""
        },
        {
            "type": "digital_write",
            "message0": "Write digital value %1 to pin %2",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "VALUE",
                    "options": [
                        ["HIGH", "HIGH"],
                        ["LOW", "LOW"]
                    ]
                },
                {
                    "type": "field_dropdown",
                    "name": "PIN",
                    "options": [
                        ["2", "2"],
                        ["3", "3"],
                        ["4", "4"],
                        ["5", "5"],
                        ["6", "6"],
                        ["7", "7"],
                        ["8", "8"],
                        ["9", "9"],
                        ["10", "10"]
                    ]
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 230,
            "tooltip": "Writes a digital value (HIGH or LOW) to the specified pin",
            "helpUrl": ""
        },
        {
            "type": "digital_read_comparison",
            "message0": "digitalRead(%1) %2 %3",
            "args0": [
                {
                    "type": "field_number",
                    "name": "PIN",
                    "value": 13,  // Default pin number
                    "min": 0,
                    "max": 255
                },
                {
                    "type": "field_dropdown",
                    "name": "OPERATOR",
                    "options": [
                        ["==", "EQ"],
                        ["!=", "NEQ"],
                        [">", "GT"],
                        ["<", "LT"]
                    ]
                },
                {
                    "type": "field_dropdown",
                    "name": "VALUE",
                    "options": [
                        ["HIGH", "HIGH"],
                        ["LOW", "LOW"]
                    ]
                }
            ],
            "output": "Boolean",  // The output is a Boolean (True or False)
            "colour": 230,
            "tooltip": "Compares digital pin read value with HIGH or LOW",
            "helpUrl": ""
        },

        {
            "type": "while_loop",
            "message0": "while %1 do %2",  // The structure of the block
            "args0": [
                {
                    "type": "input_value",  // The condition of the while loop
                    "name": "CONDITION",  // The name of the condition input
                    "check": "Boolean"  // The input must be a Boolean (true or false)
                },
                {
                    "type": "input_statement",  // The block to hold the statements inside the loop
                    "name": "DO"  // The name of the statement input (the block inside the loop)
                }
            ],
            "colour": 120,  // The color of the block
            "tooltip": "Repeat the contained code while the condition is true",
            "helpUrl": ""
        },

        {
            "type": "for_loop",
            "message0": "for %1 %2 %3 do %4",  // Structure of the block
            "args0": [
                {
                    "type": "input_value",  // Initialization input (e.g., `int i = 0`)
                    "name": "INIT",  // Name of the input
                    "check": "String"  // This is a String input (e.g., variable initialization)
                },
                {
                    "type": "input_value",  // Condition input (e.g., `i < 10`)
                    "name": "CONDITION",  // Name of the input
                    "check": "Boolean"  // The condition must evaluate to Boolean (true/false)
                },
                {
                    "type": "input_value",  // Increment input (e.g., `i++`)
                    "name": "INCREMENT",  // Name of the input
                    "check": "String"  // This is a String input (e.g., counter increment)
                },
                {
                    "type": "input_statement",  // The block that contains the loop body (statements inside the loop)
                    "name": "DO"  // The statements that will be repeated
                }
            ],
            "colour": 120,  // Color of the block
            "tooltip": "A basic for loop with initialization, condition, and increment",
            "helpUrl": ""
        },
        {
            "type": "serial_print",
            "message0": "Serial.print %1",
            "args0": [
                {
                    "type": "input_value",
                    "name": "VALUE",  // This is the value that will be printed
                    "check": "String"  // Accept a string, number, or other data types
                }
            ],
            "previousStatement": null,  // Can connect before other blocks
            "nextStatement": null,  // Can connect after other blocks
            "colour": 230,  // The color of the block
            "tooltip": "Print a value to the Serial Monitor without a newline",
            "helpUrl": ""
        },
        {
            "type": "serial_println",
            "message0": "Serial.println %1",
            "args0": [
                {
                    "type": "input_value",
                    "name": "VALUE",  // This is the value that will be printed
                    "check": "String"  // Accept a string, number, or other data types
                }
            ],
            "previousStatement": null,  // Can connect before other blocks
            "nextStatement": null,  // Can connect after other blocks
            "colour": 230,  // The color of the block
            "tooltip": "Print a value to the Serial Monitor with a newline",
            "helpUrl": ""
        },
        {
            "type": "text",  // The block's unique type
            "message0": "%1",  // The label of the block
            "args0": [
                {
                    "type": "field_input",  // This defines an input field where users can type the text
                    "name": "TEXT",  // The name of the field
                    "text": "Hello, World!"  // Default text value
                }
            ],
            "output": "String",  // This block outputs a string
            "colour": 160,  // Color of the block
            "tooltip": "This block creates a string of text",  // Tooltip description
            "helpUrl": ""  // Help URL for more information
        },
        {
            "type": "variable_declaration",
            "message0": "%1 %2 = %3",  // The structure: data_type variable_name = value
            "args0": [
                {
                    "type": "field_dropdown",  // Dropdown for data types (e.g., int, String, etc.)
                    "name": "DATA_TYPE",
                    "options": [
                        ["int", "int"],
                        ["float", "float"],
                        ["String", "String"],
                        ["boolean", "boolean"]
                    ]
                },
                {
                    "type": "field_input",  // Input field for variable name
                    "name": "VAR_NAME",
                    "text": "myVar"  // Default variable name
                },
                {
                    "type": "input_value",  // Input for the value assigned to the variable
                    "name": "VALUE",
                    "check": ["Number", "String", "Boolean"]  // Types of values that can be assigned
                }
            ],
            "previousStatement": null,  // Allows the block to be connected before other blocks
            "nextStatement": null,  // Allows the block to be connected after other blocks
            "colour": 160,  // Color of the block
            "tooltip": "Declare a variable with a specified data type and initial value",
            "helpUrl": ""
        },
        {
            "type": "integer",  // Define a block of type "integer"
            "message0": "%1",  // The label for the block with a placeholder
            "args0": [
                {
                    "type": "field_number",  // Field to accept a number
                    "name": "VALUE",  // Name of the input field
                    "value": 0,  // Default value for the block
                    "min": -Infinity,  // Minimum integer value
                    "max": Infinity,  // Maximum integer value
                    "precision": 1  // Precision (for integers, typically 1)
                }
            ],
            "output": "Number",  // This block outputs a number (integer)
            "colour": 230,  // Colour of the block
            "tooltip": "This block represents an integer number",  // Tooltip description
            "helpUrl": ""  // Help URL (optional)
        },
        {
            "type": "variable_name",  // Define the block type
            "message0": "%1",  // The label with a placeholder for the variable name
            "args0": [
                {
                    "type": "field_input",  // This will create an input field
                    "name": "VAR_NAME",  // Name of the field (for variable name)
                    "text": "myVar"  // Default value for the variable name
                }
            ],
            "output": "String",  // This block will output a string (the variable name)
            "colour": 160,  // Block color
            "tooltip": "This block represents a variable name",  // Tooltip for the block
            "helpUrl": ""  // Optional help URL
        },

        {
            "type": "if_else_if_block",  // Block type identifier
            "message0": "if %1 then %2",  // Label for the 'if' part
            "args0": [
                {
                    "type": "input_value",  // Condition input for 'if'
                    "name": "IF0",
                    "check": "Boolean"  // Expecting a boolean value for the condition
                },
                {
                    "type": "input_statement",  // Block for the statements inside the 'if'
                    "name": "DO0"
                }
            ],
            "message1": "else if %1 then %2",  // Label for the 'else if' part
            "args1": [
                {
                    "type": "input_value",  // Condition input for 'else if'
                    "name": "IF1",
                    "check": "Boolean"  // Expecting a boolean value for the condition
                },
                {
                    "type": "input_statement",  // Block for the statements inside the 'else if'
                    "name": "DO1"
                }
            ],
            "previousStatement": null,  // Allows the block to be used before other blocks
            "nextStatement": null,  // Allows the block to be used after other blocks
            "colour": 210,  // Block color
            "tooltip": "If-Else If conditional block",  // Tooltip for the block
            "helpUrl": ""  // Help URL (optional)
        }
]);
