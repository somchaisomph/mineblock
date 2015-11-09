Blockly.Blocks['mc_print'] = {
  init: function() {
    this.appendValueInput("postToChat")
        .setAlign(Blockly.ALIGN_CENTRE)
        .appendField("Print");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['mc_print'] = function(block) {
  
  var value_posttochat = Blockly.Python.valueToCode(block, 'postToChat', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
 
  var code = "mc.postToChat("+value_posttochat+")\n";
  return code;
};


// get tile position
Blockly.Blocks['mc_gettilepos_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Tile's X position");
    this.setOutput(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['mc_gettilepos_x'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "mc.player.getTilePos().x";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code,24];
};
Blockly.Blocks['mc_gettilepos_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Tile's Y position");
    this.setOutput(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['mc_gettilepos_y'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "mc.player.getTilePos().y";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code,24];
};

Blockly.Blocks['mc_gettilepos_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Tile's Z position");
    this.setOutput(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['mc_gettilepos_z'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = "mc.player.getTilePos().z";
  // TODO: Change ORDER_NONE to the correct strength.
  return [code,24];
};

Blockly.Blocks['mc_getpos_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Player's  X position");
    this.setOutput(true);
    this.setColour(155);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['mc_getpos_x'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mc.entity.getPos(this_user_id).x';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, 32];
};

Blockly.Blocks['mc_getpos_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Player's  Y position");
    this.setOutput(true);
    this.setColour(155);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['mc_getpos_y'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mc.entity.getPos(this_user_id).y';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, 32];
};

Blockly.Blocks['mc_getpos_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Player's  Z position");
    this.setOutput(true);
    this.setColour(155);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['mc_getpos_z'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mc.entity.getPos(this_user_id).y';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, 32];
};
