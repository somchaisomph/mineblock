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
  var code = "mc.postToChat("+value_posttochat+")\n";
  return code;
};


// get tile position
Blockly.Blocks['mc_gettilepos_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Tile's X position");
    this.setOutput(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['mc_gettilepos_x'] = function(block) {
  var code = "mc.player.getTilePos().x";
  return [code,24];
};
Blockly.Blocks['mc_gettilepos_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Tile's Y position");
    this.setOutput(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['mc_gettilepos_y'] = function(block) {
  var code = "mc.player.getTilePos().y";
  return [code,24];
};

Blockly.Blocks['mc_gettilepos_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Tile's Z position");
    this.setOutput(true);
    this.setColour(65);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['mc_gettilepos_z'] = function(block) {
  var code = "mc.player.getTilePos().z";
  return [code,24];
};

Blockly.Blocks['mc_getpos_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Player's  X position");
    this.setOutput(true);
    this.setColour(155);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['mc_getpos_x'] = function(block) {
  var code = 'mc.entity.getPos(this_user_id).x';
  return [code, 32];
};

Blockly.Blocks['mc_getpos_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Player's  Y position");
    this.setOutput(true);
    this.setColour(155);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['mc_getpos_y'] = function(block) {
  var code = 'mc.entity.getPos(this_user_id).y';
  return [code, 32];
};

Blockly.Blocks['mc_getpos_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Player's  Z position");
    this.setOutput(true);
    this.setColour(155);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['mc_getpos_z'] = function(block) {
  var code = 'mc.entity.getPos(this_user_id).y';
  return [code, 32];
};

// Vertical heading
Blockly.Blocks['steve_set_ver_heading'] = {
  init: function() {
    this.appendValueInput("vheading_angle")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Set Vertical Heading (specify angle in degree)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(255);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_set_ver_heading'] = function(block) {
  var value_vheading_angle = Blockly.Python.valueToCode(block, 'vheading_angle', Blockly.Python.ORDER_ATOMIC);
  var code = 'i_am.setverticalheading('+value_vheading_angle+')\n';
  return code;
};

// Set heading
Blockly.Blocks['steve_set_heading'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Set Heading To (specify angle in degree)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['steve_set_heading'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var code = 'i_am.setheading('+value_name+')\n';
  return code;
};


//Warp Steve to 
Blockly.Blocks['steve_set_position'] = {
  init: function() {
    this.appendValueInput("x_pos")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Set Player To X:");
    this.appendValueInput("y_pos")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y:");
    this.appendValueInput("z_pos")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Z:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(255);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['steve_set_position'] = function(block) {
  var value_x_pos = Blockly.Python.valueToCode(block, 'x_pos', Blockly.Python.ORDER_ATOMIC);
  var value_y_pos = Blockly.Python.valueToCode(block, 'y_pos', Blockly.Python.ORDER_ATOMIC);
  var value_z_pos = Blockly.Python.valueToCode(block, 'z_pos', Blockly.Python.ORDER_ATOMIC);
  var code = 'mc.player.setPos('+value_x_pos+','+value_y_pos+','+value_z_pos+')\n';
  return code;
};

//Get player position
Blockly.Blocks['get_player_position'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/map_pin.png", 15, 15, "*"))
        .appendField("Get Player Position")
        .appendField(new Blockly.FieldDropdown([[": X", "xpos"], [": Y", "ypos"], [": Z", "zpos"], [": XYZ", "xyzpos"]]), "position_type");
    this.setOutput(true);
    this.setColour(255);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['get_player_position'] = function(block) {
  var dropdown_position_type = block.getFieldValue('position_type');
  var code = '';
  switch(dropdown_position_type){
    case "xpos": code="mc.player.getPos().x";break;
    case "ypos": code="mc.player.getPos().y";break;
    case "zpos": code="mc.player.getPos().z";break;
    case "xyzpos" :code="mc.player.getPos()"; break;
   
  }
  return [code, Blockly.Python.ORDER_ATOMIC];
};

// Get Tile Pos
Blockly.Blocks['steve_get_tile_pos_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Get Tile Position   X :");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_get_tile_pos_x'] = function(block) {
  var code = 'mc.player.getTilePos().x';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['steve_get_tile_pos_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Get Tile Position   Y :");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_get_tile_pos_y'] = function(block) {
  var code = 'mc.player.getTilePos().y';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks['steve_get_tile_pos_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Get Tile Position   Z :");
    this.setInputsInline(false);
    this.setOutput(true, "Number");
    this.setColour(120);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_get_tile_pos_z'] = function(block) {
  var code = 'mc.player.getTilePos().z';
  return [code, Blockly.Python.ORDER_NONE];
};

// Set Tile Pos
Blockly.Blocks['steve_set_tile_pos'] = {
  init: function() {
    this.appendValueInput("set_tile_pos_x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Set Tile Position   X :");
    this.appendValueInput("set_tile_pos_y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("   Y :");
    this.appendValueInput("set_tile_pos_z")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("   Z :");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(130);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_set_tile_pos'] = function(block) {
  var value_set_tile_pos_x = Blockly.Python.valueToCode(block, 'set_tile_pos_x', Blockly.Python.ORDER_ATOMIC);
  var value_set_tile_pos_y = Blockly.Python.valueToCode(block, 'set_tile_pos_y', Blockly.Python.ORDER_ATOMIC);
  var value_set_tile_pos_z = Blockly.Python.valueToCode(block, 'set_tile_pos_z', Blockly.Python.ORDER_ATOMIC);
  var code = 'mc.player.setTilePos('+value_set_tile_pos_x+','+value_set_tile_pos_y+','+value_set_tile_pos_z+')\n';
  return code;
};



//Time delay
Blockly.Blocks['time_sleep'] = {
  init: function() {
    this.appendValueInput("delay_val")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Delay (seconds)");
    this.setInputsInline(false);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['time_sleep'] = function(block) {
  var value_delay_val = Blockly.Python.valueToCode(block, 'delay_val', Blockly.Python.ORDER_ATOMIC);
  var code = 'time.sleep('+value_delay_val+')\n';
  return code;
};

//Clear Area

Blockly.Blocks['clear_blocks'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Clear Space :")
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"]]), "range")
        .appendField("Blocks");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(285);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['clear_blocks'] = function(block) {
  var dropdown_range = block.getFieldValue('range');
  var code = 'clear_area('+dropdown_range+',mc.player.getPos())\n';
  return code;
};

// Moving Direction
Blockly.Blocks['place_block_hor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Place Blocks ");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Direction :")
        .appendField(new Blockly.FieldDropdown([["Forward", "fw"], ["Backward", "bw"]]), "direction");
    this.appendValueInput("num_blocks")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Number of Blocks :");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['place_block_hor'] = function(block) {
  var dropdown_direction = block.getFieldValue('direction');
  var value_num_blocks = Blockly.Python.valueToCode(block, 'num_blocks', Blockly.Python.ORDER_ATOMIC);
  value_num_blocks-=1;
  if (value_num_blocks<0) value_num_blocks=0 
  var code = '';
  if(dropdown_direction == "fw"){
     code = 'i_am.forward('+value_num_blocks+")\n";
  }else if (dropdown_direction == "bw"){
     code = 'i_am.backward('+value_num_blocks+')\n';
  }
  return code;
};
// Turnning
Blockly.Blocks['turnning_dir'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Turn");
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldDropdown([["LEFT", "lt"], ["RIGHT", "rt"], ["UP", "up"], ["DOWN", "dn"]]), "turn_direction");
    this.appendValueInput("num_blocks")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(", Angle (0-359):");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['turnning_dir'] = function(block) {
  var dropdown_turn_direction = block.getFieldValue('turn_direction');
  var value_num_blocks = Blockly.Python.valueToCode(block, 'num_blocks', Blockly.Python.ORDER_ATOMIC);
  if(value_num_blocks < 0) value_num_blocks = value_num_blocks * -1;
  if(value_num_blocks >= 360 ) value_num_blocks = value_num_blocks - 360;
  var code = '';
  switch(dropdown_turn_direction){
     case "lt" : code = 'i_am.left('+value_num_blocks+")\n"; break;
     case "rt" : code = 'i_am.right('+value_num_blocks+")\n";break;
     case "up" : code = 'i_am.up('+value_num_blocks+")\n";break;
     case "dn" : code = 'i_am.down('+value_num_blocks+")\n";break;
         
  }
  return code;
};

// Speed
Blockly.Blocks['steve_speed'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Set Speed To :")
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"], ["8", "8"], ["9", "9"], ["10", "10"]]), "moving _speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_speed'] = function(block) {
  var dropdown_moving__speed = block.getFieldValue('moving _speed');
  var code = 'i_am.speed('+dropdown_moving__speed+')\n';
  return code;
};


// Set Pen
Blockly.Blocks['steve_set_pen_block'] = {
  init: function() {
    this.appendValueInput("pen_block_i")
        .appendField(new Blockly.FieldImage("/images/icons/setting.png", 15, 15, "*"))
        .appendField("Set Block Type : ");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_set_pen_block'] = function(block) {
  var value_pen_block_i = Blockly.Python.valueToCode(block, 'pen_block_i', Blockly.Python.ORDER_ATOMIC);
  var code = 'i_am.penblock('+value_pen_block_i+')\n';
  return code;
};

// Set position to
Blockly.Blocks['set_pos_to'] = {
  init: function() {
    this.appendValueInput("pos_x")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Set Position to   X :");
    this.appendValueInput("pos_y")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("  Y :");
    this.appendValueInput("pos_z")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("  Z :");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['set_pos_to'] = function(block) {
  var value_pos_x = Blockly.Python.valueToCode(block, 'pos_x', Blockly.Python.ORDER_ATOMIC);
  var value_pos_y = Blockly.Python.valueToCode(block, 'pos_y', Blockly.Python.ORDER_ATOMIC);
  var value_pos_z = Blockly.Python.valueToCode(block, 'pos_z', Blockly.Python.ORDER_ATOMIC);
  var  code = 'i_am.setposition('+value_pos_x+','+value_pos_y+','+value_pos_z+')\n';
  return code;
};


// Pen
Blockly.Blocks['steve_pen_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Pen (Up/Down)")
        .appendField(new Blockly.FieldDropdown([["Up", "0"], ["Down", "1"]]), "pen_status");
    this.setOutput(true, "Number");
    this.setColour(15);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_pen_status'] = function(block) {
  var dropdown_pen_status = block.getFieldValue('pen_status');
  var code = '...';
  if(dropdown_pen_status=="0")
	return "i_am.penup()\n";
  else if(dropdown_pen_status=="1")
    return "i_am.pendown()\n";

};
