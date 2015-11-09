// Forward
Blockly.Blocks['steve_forward'] = {
  init: function() {
    this.appendValueInput("steps")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Forward (specify number of blocks)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['steve_forward'] = function(block) {
  var value_steps = Blockly.Python.valueToCode(block, 'steps', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'i_am.forward('+value_steps+")\n";
  return code;
};
//Backward
Blockly.Blocks['steve_backward'] = {
  init: function() {
    this.appendValueInput("backward")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Backward (specify number of blocks)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['steve_backward'] = function(block) {
  var value_backward = Blockly.Python.valueToCode(block, 'backward', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'i_am.backward('+value_backward+')\n';
  return code;
};



// Left
Blockly.Blocks['steve_left'] = {
  init: function() {
    this.appendValueInput("left_degree")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Turn left (specify angle in degree)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_left'] = function(block) {
  var value_left_degree = Blockly.Python.valueToCode(block, 'left_degree', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'i_am.left('+value_left_degree+")\n";
  return code;
};

// Right
Blockly.Blocks['steve_right'] = {
  init: function() {
    this.appendValueInput("right_degree")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Turn right (specify angle in degree)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['steve_right'] = function(block) {
  var value_right_degree = Blockly.Python.valueToCode(block, 'right_degree', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'i_am.right('+value_right_degree+')\n';
  return code;
};


// up
Blockly.Blocks['steve_up'] = {
  init: function() {
    this.appendValueInput("up_degree")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Turn up (specify angle in degree)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_up'] = function(block) {
  var value_up_degree = Blockly.Python.valueToCode(block, 'up_degree', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'i_am.up('+value_up_degree+')\n';
  return code;
};

//Down
Blockly.Blocks['steve_down'] = {
  init: function() {
    this.appendValueInput("down_degree")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Turn down (specify angle in degree)");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(330);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_down'] = function(block) {
  var value_down_degree = Blockly.Python.valueToCode(block, 'down_degree', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'i_am.down('+value_down_degree+')\n';
  return code;
};


// Speed
Blockly.Blocks['steve_speed'] = {
  init: function() {
    this.appendValueInput("moving _speed")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Set Speed");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(90);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_speed'] = function(block) {
  var value_moving__speed = Blockly.Python.valueToCode(block, 'moving _speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'i_am.speed('+value_moving__speed+')\n';
  return code;
};

// Set Pen
Blockly.Blocks['steve_set_pen_block'] = {
  init: function() {
    this.appendValueInput("pen_block_i")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Block To Put");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_set_pen_block'] = function(block) {
  var value_pen_block_i = Blockly.Python.valueToCode(block, 'pen_block_i', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'i_am.penblock('+value_pen_block_i+')\n';
  return code;
};
// Set Drawing At
Blockly.Blocks['steve_start_drawing_pos'] = {
  init: function() {
    this.appendValueInput("start_drawing_x")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Start Putting At   X:");
    this.appendValueInput("start_drawing_y")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Y:");
    this.appendValueInput("start_drawing_z")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Z:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(180);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Python['steve_start_drawing_pos'] = function(block) {
  var value_start_drawing_x = Blockly.Python.valueToCode(block, 'start_drawing_x', Blockly.Python.ORDER_ATOMIC);
  var value_start_drawing_y = Blockly.Python.valueToCode(block, 'start_drawing_y', Blockly.Python.ORDER_ATOMIC);
  var value_start_drawing_z = Blockly.Python.valueToCode(block, 'start_drawing_z', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'i_am.setposition('+value_start_drawing_x+','+value_start_drawing_y+','+value_start_drawing_z+')\n';
  return code;
};


// Block
Blockly.Blocks['steve_block_grp_1'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Block (Group 1)")
        .appendField(new Blockly.FieldDropdown([
        ["AIR", "0"], ["STONE", "1"], ["GRASS", "2"],
        ["DIRT", "3"],
        ["COBBLESTONE", "4"],
        ["WOOD_PLANKS", "5"],
        ["SAPLING", "6"],
        ["BEDROCK", "7"],
        ["WATER_FLOWING", "8"],
        ["WATER_STATIONARY", "9"],
        ["STONE_SLAB_DOUBLE","43"],
["STONE_SLAB","44"],
["BRICK_BLOCK","45"],
["TNT","46"],
["BOOKSHELF","47"],
["MOSS_STONE","48"],
["OBSIDIAN","49"],
["TORCH","50"],
["FIRE","51"],
["TAIRS_WOOD","53"]
       
        ]), "block_grp_1_id");
    this.setOutput(true, "Number");
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_block_grp_1'] = function(block) {
  var dropdown_block_grp_1_id = block.getFieldValue('block_grp_1_id');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.Python.ORDER_NONE];
  return dropdown_block_grp_1_id
};

Blockly.Blocks['steve_block_grp_2'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Block (Group 2)")
        .appendField(new Blockly.FieldDropdown([
        ["SAND", "12"],
        ["GRAVEL", "13"],
        ["LAVA_FLOWING", "10"],
        ["LAVA_STATIONARY", "11"],
        ["GLASS","20"],
        ["FIRE","51"],
["BEDROCK_INVISIBLE","95"],
["STONE_BRICK","98"],
["GLASS_PANE","102"],
["MELON","103"],
["FENCE_GATE","107"],
["GLOWING_OBSIDIAN","246"],
["NETHER_REACTOR_CORE","247"],
        ]), "block_grp_2_id");
    this.setOutput(true, "Number");
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_block_grp_2'] = function(block) {
  var dropdown_block_grp_2_id = block.getFieldValue('block_grp_2_id');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.Python.ORDER_NONE];
  return [dropdown_block_grp_2_id,Blockly.Python.ORDER_ATOMIC]
};
/*
AIR                 = Block(0)
STONE               = Block(1)
GRASS               = Block(2)
DIRT                = Block(3)
COBBLESTONE         = Block(4)
WOOD_PLANKS         = Block(5)
SAPLING             = Block(6)
BEDROCK             = Block(7)
WATER_FLOWING       = Block(8)
WATER               = WATER_FLOWING
WATER_STATIONARY    = Block(9)
LAVA_FLOWING        = Block(10)
LAVA                = LAVA_FLOWING
LAVA_STATIONARY     = Block(11)




BED                 = Block(26)
COBWEB              = Block(30)
GRASS_TALL          = Block(31)
WOOL                = Block(35)
FLOWER_YELLOW       = Block(37)
FLOWER_CYAN         = Block(38)
MUSHROOM_BROWN      = Block(39)
MUSHROOM_RED        = Block(40)
GOLD_BLOCK          = Block(41)
IRON_BLOCK          = Block(42)
STONE_SLAB_DOUBLE   = Block(43)
STONE_SLAB          = Block(44)
BRICK_BLOCK         = Block(45)
TNT                 = Block(46)
BOOKSHELF           = Block(47)
MOSS_STONE          = Block(48)
OBSIDIAN            = Block(49)
TORCH               = Block(50)
FIRE                = Block(51)
STAIRS_WOOD         = Block(53)
CHEST               = Block(54)
DIAMOND_ORE         = Block(56)
DIAMOND_BLOCK       = Block(57)
CRAFTING_TABLE      = Block(58)
FARMLAND            = Block(60)
FURNACE_INACTIVE    = Block(61)
FURNACE_ACTIVE      = Block(62)
DOOR_WOOD           = Block(64)
LADDER              = Block(65)
STAIRS_COBBLESTONE  = Block(67)
DOOR_IRON           = Block(71)
REDSTONE_ORE        = Block(73)
SNOW                = Block(78)
ICE                 = Block(79)
SNOW_BLOCK          = Block(80)
CACTUS              = Block(81)
CLAY                = Block(82)
SUGAR_CANE          = Block(83)
FENCE               = Block(85)
GLOWSTONE_BLOCK     = Block(89)
BEDROCK_INVISIBLE   = Block(95)
STONE_BRICK         = Block(98)
GLASS_PANE          = Block(102)
MELON               = Block(103)
FENCE_GATE          = Block(107)
GLOWING_OBSIDIAN    = Block(246)
NETHER_REACTOR_CORE = Block(247)
*/
Blockly.Blocks['steve_block_grp_3'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Block (Group 3)")
        .appendField(new Blockly.FieldDropdown([
        ["GOLD_ORE","14"],
        ["IRON_ORE","15"],
        ["COAL_ORE", "16"],
        ["SAND","12"],
	["GRAVEL","13"],
	["WOOD","17"],
	["LEAVES","18"],
        ["LAPIS_LAZULI_ORE","21"],
        ["LAPIS_LAZULI_BLOCK","22"],
        ["SANDSTONE","24"],
["DOOR_IRON","71"],
["REDSTONE_ORE","73"],
["SNOW","78"],
["ICE","79"],
["SNOW_BLOCK","80"],
["CACTUS","81"],
["CLAY","82"],
["SUGAR_CANE","83"],
["FENCE","85"],
["GLOWSTONE_BLOCK","89"],
        ]), "block_grp_3_id");
    this.setOutput(true, "Number");
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_block_grp_3'] = function(block) {
  var dropdown_block_grp_3_id = block.getFieldValue('block_grp_3_id');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.Python.ORDER_NONE];
  return [dropdown_block_grp_3_id,Blockly.Python.ORDER_ATOMIC]
};

Blockly.Blocks['steve_block_grp_4'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("Block (Group 4)")
        .appendField(new Blockly.FieldDropdown([
         ["BED","26"],
        ["COBWEB","30"],
        ["GRASS_TALL","31"],
        ["WOOL","35"],
        ["FLOWER_YELLOW","37"],
        ["FLOWER_CYAN","38"],
        ["MUSHROOM_BROWN","39"],
        ["MUSHROOM_RED","40"],
        ["GOLD_BLOCK","41"],
        ["IRON_BLOCK","42"],
["CHEST","54"],
["DIAMOND_ORE","56"],
["DIAMOND_BLOCK","57"],
["CRAFTING_TABLE","58"],
["FARMLAND","60"],
["FURNACE_INACTIVE","61"],
["FURNACE_ACTIVE","62"],
["DOOR_WOOD","64"],
["LADDER","65"],
["STAIRS_COBBLESTONE","67"],
        ]), "block_grp_4_id");
    this.setOutput(true, "Number");
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_block_grp_4'] = function(block) {
  var dropdown_block_grp_4_id = block.getFieldValue('block_grp_4_id');
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  //return [code, Blockly.Python.ORDER_NONE];
  return [dropdown_block_grp_4_id,Blockly.Python.ORDER_ATOMIC]
};


// Pen
Blockly.Blocks['steve_pen_status'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
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
  // TODO: Assemble Python into code variable.
  var code = '...';
  // TODO: Change ORDER_NONE to the correct strength.
  if(dropdown_pen_status=="0")
	return "i_am.penup()\n";
  else if(dropdown_pen_status=="1")
    return "i_am.pendown()\n";
  //return [code, Blockly.Python.ORDER_NONE];
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
  // TODO: Assemble Python into code variable.
  var code = 'i_am.setheading('+value_name+')\n';
  return code;
};

// Vertical heading
Blockly.Blocks['steve_set_ver_heading'] = {
  init: function() {
    this.appendValueInput("vheading_angle")
        .setCheck("Number")
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
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
  // TODO: Assemble Python into code variable.
  var code = 'i_am.setverticalheading('+value_vheading_angle+')\n';
  return code;
};

//Warp Steve to 
Blockly.Blocks['steve_set_position'] = {
  init: function() {
    this.appendValueInput("x_pos")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Warp To X:");
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
  // TODO: Assemble Python into code variable.
  var code = 'mc.player.setPos('+value_x_pos+','+value_y_pos+','+value_z_pos+')\n';
  return code;
};


// Where is Steve
Blockly.Blocks['steve_where_x'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Steve's X Position");
    this.setOutput(true);
    this.setColour(255);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_where_x'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mc.player.getPos().x';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, 20];
};

Blockly.Blocks['steve_where_y'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Steve's Y Position");
    this.setOutput(true);
    this.setColour(255);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_where_y'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mc.player.getPos().y';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, 20];
};

Blockly.Blocks['steve_where_z'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Steve's Z Position");
    this.setOutput(true);
    this.setColour(255);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_where_z'] = function(block) {
  // TODO: Assemble Python into code variable.
  var code = 'mc.player.getPos().z';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, 20];
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
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep('+value_delay_val+')\n';
  return code;
};

//Clear Area
Blockly.Blocks['steve_clear_area'] = {
  init: function() {
    this.appendValueInput("clear_x")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("https://www.gstatic.com/codesite/ph/images/star_on.gif", 15, 15, "*"))
        .appendField("Clear Space Blocks in X:");
    this.appendValueInput("clear_y")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Blocks in Y:");
    this.appendValueInput("clear_z")
        .setCheck("Number")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField("Blocks in Z:");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Python['steve_clear_area'] = function(block) {
  var value_clear_x = Blockly.Python.valueToCode(block, 'clear_x', Blockly.Python.ORDER_ATOMIC);
  var value_clear_y = Blockly.Python.valueToCode(block, 'clear_y', Blockly.Python.ORDER_ATOMIC);
  var value_clear_z = Blockly.Python.valueToCode(block, 'clear_z', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code="cpos = mc.player.getTilePos()\n";
  code +="mc.setBlocks(cpos.x, cpos.y, cpos.z, cpos.x+int("+value_clear_x+"/2), cpos.y+int("+value_clear_y+"/2), cpos.z+int("+value_clear_z+"/2),block.AIR.id)\n"
  code += "mc.setBlocks(cpos.x, cpos.y, cpos.z, cpos.x-int("+value_clear_x+"/2), cpos.y-int("+value_clear_y+"/2), cpos.z-int("+value_clear_z+"/2),block.AIR.id)\n";
  
  return code;
};

