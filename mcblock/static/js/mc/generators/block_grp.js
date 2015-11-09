// set block

Blockly.Blocks['mc_setblock'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Put Block");
    this.appendValueInput("xpos")
        //.setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("X :");
    this.appendValueInput("ypos")
       // .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y :");
    this.appendValueInput("zpos")
        //.setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Z :");
    this.appendValueInput("block_id")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Type");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['mc_setblock'] = function(block) {
  var value_xpos = Blockly.Python.valueToCode(block, 'xpos', Blockly.Python.ORDER_ATOMIC);
  var value_ypos = Blockly.Python.valueToCode(block, 'ypos', Blockly.Python.ORDER_ATOMIC);
  var value_zpos = Blockly.Python.valueToCode(block, 'zpos', Blockly.Python.ORDER_ATOMIC);
  var value_block_id = Blockly.Python.valueToCode(block, 'block_id', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'mc.setBlock('+value_xpos+','+value_ypos+','+value_zpos+','+value_block_id+')\n';
  return code;
};

// Block Type
Blockly.Blocks['mc_block_type'] = {
  init: function() {
    this.appendValueInput("block_id")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Block Type");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['mc_block_type'] = function(block) {
  var value_block_id = Blockly.Python.valueToCode(block, 'block_id', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = '...';
  return code;
};


//Transparent block
Blockly.Blocks['mc_block_01'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Blocks  1")
        .appendField(new Blockly.FieldDropdown([["AIR", "0"], ["GRASS ", "2"], ["STONE", "1"], ["DIRT", "3"], ["COBBLESTONE", "4"],["WOOD PLANK", "5"],["SAPLING", "6"],["BEDROCK", "7"],["WATER FLOW", "8"],["WATER STATIONARY", "9"],["LAVA FLOWING", "10"]]), "id");
    this.setOutput(true);
    this.setColour(150);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['mc_block_01'] = function(block) {
  var dropdown_id = block.getFieldValue('id');
  // TODO: Assemble Python into code variable.
  var code = dropdown_id;
  return code;
};
