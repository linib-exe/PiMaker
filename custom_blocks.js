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
                    "check": "Number"
                },
                {
                    "type": "field_dropdown",
                    "name": "OP",
                    "options": [
                        ["<", "LT"],
                        [">", "GT"],
                        ["==", "EQ"]
                    ]
                },
                {
                    "type": "input_value",
                    "name": "B",
                    "check": "Number"
                }
            ],
            "output": "Boolean",
            "colour": 210,
            "tooltip": "Compares two values",
            "helpUrl": ""
        },
]);
