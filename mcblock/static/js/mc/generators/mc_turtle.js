// Block
// Etc Group
Blockly.Blocks['blk_air'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("AIR");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Air');
  }
};
Blockly.Python['blk_air'] = function(block) {
  var code = 'block.Block(0)';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//****************
Blockly.Blocks['blk_COBWEB'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("COBWEB");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('A single thread spun by a spider');
    this.setHelpUrl('http://minecraft.gamepedia.com/Cobweb');
  }
};
Blockly.Python['blk_COBWEB'] = function(block) {
  var code = 'block.Block(30)';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//*****************
Blockly.Blocks['blk_tnt'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("TNT")
        .appendField(new Blockly.FieldDropdown([["Inactive", "0"], ["Ready To Explode", "1"]]), "subtype");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/TNT');
  }
};
Blockly.Python['blk_tnt'] = function(block) {
  var dropdown_subtype = block.getFieldValue('subtype');
  var code = 'block.Block(46, '+dropdown_subtype+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};              
//*****************
Blockly.Blocks['blk_fire'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("FIRE");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Fire');
  }
};
Blockly.Python['blk_fire'] = function(block) {
  var code = 'block.Block(51)';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//*****************
Blockly.Blocks['blk_snow'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("SNOW");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Snow');
  }
};
Blockly.Python['blk_snow'] = function(block) {
  var code = 'block.Block(78)';
  return [code, Blockly.Python.ORDER_ATOMIC];
};
//*****************
Blockly.Blocks['snow_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("SNOW BLOCK ");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Snow');
  }
};
Blockly.Python['snow_blk'] = function(block) { 
  var code = "block.Block(80)";
  return [code, Blockly.Python.ORDER_NONE];
};             
//*****************
Blockly.Blocks['ice_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/ice_blk.png", 15, 15, "*"))
        .appendField("ICE ");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Ice');
  }
};
Blockly.Python['ice_blk'] = function(block) { 
  var code = "block.Block(79)";
  return [code, Blockly.Python.ORDER_NONE];
};             
//*****************
Blockly.Blocks['clay_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("CLAY");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Clay');
  }
};
Blockly.Python['clay_blk'] = function(block) { 
  var code = "block.Block(82)";
  return [code, Blockly.Python.ORDER_NONE];
};             
//*****************
Blockly.Blocks['bedrock_invis_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("BEDROCK INVISIBLE");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('An invisible and indestructible block ');
    this.setHelpUrl('http://minecraft.gamepedia.com/Invisible_Bedrock');
  }
};
Blockly.Python['bedrock_invis_blk'] = function(block) { 
  var code = "block.Block(95)";
  return [code, Blockly.Python.ORDER_NONE];
};             
//*****************
//Decorate
Blockly.Blocks['nether_react'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("NETHER REACTOR CORE")
        .appendField(new Blockly.FieldDropdown([["Unused", "0"], ["Active", "1"], ["Stopped", "2"]]), "neth_sub");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/TNT');
  }
};
Blockly.Python['nether_react'] = function(block) {
  var neth_sub_val = block.getFieldValue('neth_sub');
  var code = 'block.Block(247, '+neth_sub_val+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};              
//*****************
Blockly.Blocks['bed_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("BED");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Bed');
  }
};
Blockly.Python['bed_blk'] = function(block) { 
  var code = "block.Block(26)";
  return [code, Blockly.Python.ORDER_NONE];
};      
//*****************
Blockly.Blocks['gold_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/gold_blk.png", 15, 15, "*"))
        .appendField("GOLD");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Gold_block');
  }
};
Blockly.Python['gold_blk'] = function(block) { 
  var code = "block.Block(41)";
  return [code, Blockly.Python.ORDER_NONE];
};      
//*****************
Blockly.Blocks['iron_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/iron_blk.png", 15, 15, "*"))
        .appendField("IRON");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Iron_block');
  }
};
Blockly.Python['iron_blk'] = function(block) { 
  var code = "block.Block(42)";
  return [code, Blockly.Python.ORDER_NONE];
};      
//*****************
Blockly.Blocks['slap_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("STONE SLAP")
	.appendField(new Blockly.FieldDropdown([["Standard", "0"], ["Sandstone", "1"], ["Wooden", "2"],["Cobblestone","3"],["Brick","4"],["Stone Brick","5"]]),"slap_type");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Stone_slabs');
  }
};
Blockly.Python['slap_blk'] = function(block) { 
  var slap_type_val = block.getFieldValue('slap_type');
  var code = "block.Block(44,"+slap_type_val+")";
  return [code, Blockly.Python.ORDER_NONE];
};      
//*****************
Blockly.Blocks['slap_dbl_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("STONE SLAP DOUBLE")
	.appendField(new Blockly.FieldDropdown([["Standard", "0"], ["Sandstone", "1"], ["Wooden", "2"],["Cobblestone","3"],["Brick","4"],["Stone Brick","5"]]), "slap_dbl_type");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Slab#Double_stone_slabs');
  }
};
Blockly.Python['slap_dbl_blk'] = function(block) { 
  var slap_dbl_type_val=block.getFieldValue('slap_dbl_type');
  var code = "block.Block(43,"+slap_dbl_type_val+")";
  return [code, Blockly.Python.ORDER_NONE];
};      
//*****************
Blockly.Blocks['brick_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("BRICK");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Brick_block');
  }
};
Blockly.Python['brick_blk'] = function(block) { 
  var code = "block.Block(45)";
  return [code, Blockly.Python.ORDER_NONE];
};      
//*****************
Blockly.Blocks['book_shelf'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("BOOK SHELF");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['book_shelf'] = function(block) { 
  var code = "block.Block(47)";
  return [code, Blockly.Python.ORDER_NONE];
};      
//*****************
//Solid
Blockly.Blocks['stone_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("STONE");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Stone');
  }
};
Blockly.Python['stone_blk'] = function(block) { 
  var code = "block.Block(1)";
  return [code, Blockly.Python.ORDER_NONE];
};      
//*****************
Blockly.Blocks['cob_stone_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/cobblestone.png", 15, 15, "*"))
        .appendField("COBBLE STONE");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('A naturally rounded stone, larger than a pebble and smaller than a boulder, formerly used in paving.');
    this.setHelpUrl('http://minecraft.gamepedia.com/Cobblestone');
  }
};
Blockly.Python['cob_stone_blk'] = function(block) { 
  var code = "block.Block(4)";
  return [code, Blockly.Python.ORDER_NONE];
};      
//*****************
Blockly.Blocks['bed_rck_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/bedrock.png", 15, 15, "*"))
        .appendField("BEDROCK");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('Solid rock, overlaid in most places by soil or rock fragments.');
    this.setHelpUrl('http://minecraft.gamepedia.com/Bedrock');
  }
};
Blockly.Python['cob_stone_blk'] = function(block) { 
  var code = "block.Block(7)";
  return [code, Blockly.Python.ORDER_NONE];
};      
//*****************
Blockly.Blocks['sand_stone'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("SAND STONE")
        .appendField(new Blockly.FieldDropdown([["Sandy", "0"], ["Chiseled", "1"], ["Smooth", "2"]]), "sand_sub");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('A rock consisting of sand, usually quartz.');
    this.setHelpUrl('http://minecraft.gamepedia.com/Sandstone');
  }
};
Blockly.Python['sand_stone'] = function(block) {
  var sand_sub_val = block.getFieldValue('sand_sub');
  var code = 'block.Block(24, '+sand_sub_val+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};  
//**************
Blockly.Blocks['moss_stone_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("MOSS STONE");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['moss_stone_blk'] = function(block) { 
  var code = "block.Block(48)";
  return [code, Blockly.Python.ORDER_NONE];
};      
//*****************
Blockly.Blocks['obsi_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("OBSIDIAN");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('A volcanic glass similar in composition to granite, usually dark.');
    this.setHelpUrl('http://minecraft.gamepedia.com/Obsidian');
  }
};
Blockly.Python['obsi_blk'] = function(block) { 
  var code = "block.Block(49)";
  return [code, Blockly.Python.ORDER_NONE];
};
//*************      
Blockly.Blocks['gravel_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("GRAVEL");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('A small stones and pebbles.');
    this.setHelpUrl('http://minecraft.gamepedia.com/Gravel');
  }
};
Blockly.Python['gravel_blk'] = function(block) { 
  var code = "block.Block(13)";
  return [code, Blockly.Python.ORDER_NONE];
};      
//*****************
//Liquid
Blockly.Blocks['water_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/water.png", 15, 15, "*"))
        .appendField("WATER");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Water');
  }
};
Blockly.Python['water_blk'] = function(block) { 
  var code = "block.Block(8)";
  return [code, Blockly.Python.ORDER_NONE];
};      
//*****************
Blockly.Blocks['water_stat_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/water.png", 15, 15, "*"))
        .appendField("WATER STATIONARY Level: ")
	.appendField(new Blockly.FieldDropdown([["0", "7"], ["1", "6"], ["2", "5"],["3","4"],["4","3"],["5","2"],["6","1"],["7","0"]]), "water_level");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Water');
  }
};
Blockly.Python['water_stat_blk'] = function(block) { 
  var water_level_val = block.getFieldValue('water_level');
  var code = "block.Block(9,"+water_level_val+")";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['dirt_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("DIRT");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Dirt');
  }
};
Blockly.Python['dirt_blk'] = function(block) { 
  var code = "block.Block(3)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['lava_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/lava.png", 15, 15, "*"))
        .appendField("LAVA");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Lava');
  }
};
Blockly.Python['lava_blk'] = function(block) { 
  var code = "block.Block(10)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['lava_stat_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/lava.png", 15, 15, "*"))
        .appendField("LAVA STATIONARY Level: ")
        .appendField(new Blockly.FieldDropdown([["0", "7"], ["1", "6"], ["2", "5"],["3","4"],["4","3"],["5","2"],["6","1"],["7","0"]]), "lava_level");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Lava');
  }
};
Blockly.Python['lava_stat_blk'] = function(block) { 
  var lava_level_val = block.getFieldValue('lava_level');
  var code = "block.Block(11,"+lava_level_val+")";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['sand_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("SAND");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Sand');
  }
};
Blockly.Python['sand_blk'] = function(block) { 
  var code = "block.Block(12)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
//Plant
Blockly.Blocks['cactus_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("CACTUS");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Cactus');
  }
};
Blockly.Python['cactus_blk'] = function(block) { 
  var code = "block.Block(81)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************

Blockly.Blocks['sugar_canes_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("SUGAR CANES");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Sugar_cane');
  }
};
Blockly.Python['sugar_canes_blk'] = function(block) { 
  var code = "block.Block(83)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['flower_yell_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("FLOWER YELLOW");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Flower');
  }
};
Blockly.Python['flower_yell_blk'] = function(block) { 
  var code = "block.Block(37)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['flower_cy_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("FLOWER CYAN");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Flower');
  }
};
Blockly.Python['flower_cy_blk'] = function(block) { 
  var code = "block.Block(38)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['mushroom_brw_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("MUSH ROOM BROWN");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Mushroom');
  }
};
Blockly.Python['mushroom_brw_blk'] = function(block) { 
  var code = "block.Block(39)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['mushroom_red_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("MUSH ROOM RED");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Mushroom');
  }
};
Blockly.Python['mushroom_red_blk'] = function(block) { 
  var code = "block.Block(40)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['wool_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("WOOL")
        .appendField(new Blockly.FieldDropdown([["White", "0"], ["Orange", "1"], ["Magenta", "2"],
	 ["Light Blue", "3"], ["Yellow", "4"], ["Lime", "5"], ["Pink", "6"], ["Grey", "7"]
	, ["Light Grey", "8"], ["Cyan", "9"], ["Purple", "10"], ["Blue", "11"], 
        ["Brown", "12"], ["Green", "13"], ["Red", "14"], ["Black", "15"]]), "wool_sub");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('Fine, soft, curly hair that forms the fleece of sheep.');
    this.setHelpUrl('http://minecraft.gamepedia.com/Wood');
  }
};
Blockly.Python['wool_blk'] = function(block) {
  var wool_sub_val = block.getFieldValue('wool_sub');
  var code = 'block.Block(35, '+wool_sub_val+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};  
//**************
Blockly.Blocks['wood_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("WOOD")
        .appendField(new Blockly.FieldDropdown([["Oak", "0"], ["Spurce", "1"], ["Birch", "2"]]), "wood_sub");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Wood');
  }
};
Blockly.Python['wood_blk'] = function(block) {
  var wood_sub_val = block.getFieldValue('wood_sub');
  var code = 'block.Block(17, '+wood_sub_val+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};  
//**************
Blockly.Blocks['leaves_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("LEAVES")
        .appendField(new Blockly.FieldDropdown([["Oak", "0"], ["Spurce", "1"], ["Birch", "2"]]), "leave_sub");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Leaves');
  }
};
Blockly.Python['leaves_blk'] = function(block) {
  var leave_sub_val = block.getFieldValue('leave_sub');
  var code = 'block.Block(18, '+leave_sub_val+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};  
//**************
Blockly.Blocks['grass_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("GRASS");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Grass_Block');
  }
};
Blockly.Python['grass_blk'] = function(block) { 
  var code = "block.Block(2)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['grass_tall_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/grass_tall.png", 15, 15, "*"))
        .appendField("GRASS TALL")
        .appendField(new Blockly.FieldDropdown([["Shrub", "0"], ["Grass", "1"], ["Firn", "2"]]), "grass_sub");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Grass');
  }
};
Blockly.Python['grass_tall_blk'] = function(block) { 
  var grass_sub_val = block.getFieldValue('grass_sub');
  var code = "block.Block(31,"+grass_sub_val+")";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['sapling_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("SAPLING")
        .appendField(new Blockly.FieldDropdown([["Oak", "0"], ["Spurce", "1"], ["Birch", "2"]]), "sapling_sub");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('A small tree.');
    this.setHelpUrl('http://minecraft.gamepedia.com/Sapling');
  }
};
Blockly.Python['sapling_blk'] = function(block) {
  var sapling_sub_val = block.getFieldValue('sapling_sub');
  var code = 'block.Block(6, '+leave_sub_val+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};  
//**************
Blockly.Blocks['plank_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/wood_plank.png", 15, 15, "*"))
        .appendField("WOOD PLANKS");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Wood_planks');
  }
};
Blockly.Python['plank_blk'] = function(block) { 
  var code = "block.Block(5)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['melon_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("MELON");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Melon');
  }
};
Blockly.Python['melon_blk'] = function(block) { 
  var code = "block.Block(103)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['torch_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/torch.png", 15, 15, "*"))
        .appendField("TORCH")
        .appendField(new Blockly.FieldDropdown([["Pointing East", "1"], ["Pointing West", "2"], ["Pionting South", "3"],["Pionting North", "4"],["Pionting Up", "5"]]), "torch_facing");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('Source of light.');
    this.setHelpUrl('http://minecraft.gamepedia.com/Torch');
  }
};
Blockly.Python['torch_blk'] = function(block) {
  var torch_facing_val = block.getFieldValue('torch_facing');
  var code = 'block.Block(50, '+torch_facing_val+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};  
//**************
Blockly.Blocks['stairs_wood_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("STAIRS WOOD")
        .appendField(new Blockly.FieldDropdown([["Ascending east", "0"],["Ascending west", "1"],["Ascending south", "2"],["Ascending north", "3"]
,["Ascending east (upside down)", "4"],["Ascending west (upside down)", "5"],["Ascending south (upside down)", "6"],["Ascending north (upside down)", "7"]]), "stairs_wood_type");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Stair');
  }
};
Blockly.Python['stairs_wood_blk'] = function(block) {
  var stairs_wood_type_val = block.getFieldValue('stairs_wood_type');
  var code='';
  code = 'block.Block(53,'+stairs_wood_type_val+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};  
//**************
Blockly.Blocks['stairs_cobble_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("STAIRS COBBLESTONE")
         .appendField(new Blockly.FieldDropdown([["Ascending east", "0"],["Ascending west", "1"],["Ascending south", "2"],["Ascending north", "3"]
,["Ascending east (upside down)", "4"],["Ascending west (upside down)", "5"],["Ascending south (upside down)", "6"],["Ascending north (upside down)", "7"]]), "stairs_cobble_type");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Stair');
  }
};
Blockly.Python['stairs_cobble_blk'] = function(block) {
  var stairs_cobble_type_val = block.getFieldValue('stairs_cobble_type');
  var code='';
  code = 'block.Block(67,'+stairs_cobble_type_val+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};  
//**************
Blockly.Blocks['chest_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("CHEST Facing ")
        .appendField(new Blockly.FieldDropdown([["north", "2"],["south", "3"],["west", "4"],["east", "5"]]), "chest_type");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Chest');
  }
};
Blockly.Python['chest_blk'] = function(block) {
  var chest_type_val = block.getFieldValue('chest_type');
  var code='';
  code = 'block.Block(54,'+chest_type_val+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};  
//**************
Blockly.Blocks['ladder_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("LADDER Facing ")
         .appendField(new Blockly.FieldDropdown([["north", "2"],["south", "3"],["west", "4"],["east", "5"]]), "ladder_type");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Ladder');
  }
};
Blockly.Python['ladder_blk'] = function(block) {
  var ladder_type_val = block.getFieldValue('ladder_type');
  var code='';
  code = 'block.Block(65,'+ladder_type_val+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};  
//**************
Blockly.Blocks['furnace_inact_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("FURNACE INACTIVE Facing")
         .appendField(new Blockly.FieldDropdown([["north", "2"],["south", "3"],["west", "4"],["east", "5"]]), "fur_inac_type");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Furnace');
  }
};
Blockly.Python['furnace_inact_blk'] = function(block) {
  var fur_inac_type_val = block.getFieldValue('fur_inac_type');
  var code='';
  code = 'block.Block(61,'+fur_inac_type_val+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};  
//**************
Blockly.Blocks['furnace_act_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("FURNACE ACTIVE Facing")
         .appendField(new Blockly.FieldDropdown([["north", "2"],["south", "3"],["west", "4"],["east", "5"]]), "fur_nac_type");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Furnace');
  }
};
Blockly.Python['furnace_act_blk'] = function(block) {
  var fur_nac_type_val = block.getFieldValue('fur_nac_type');
  var code='';
  code = 'block.Block(62,'+fur_nac_type_val+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};  
//**************
Blockly.Blocks['fence_gate_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("FENCE GATE Facing ")
         .appendField(new Blockly.FieldDropdown([["north", "2"],["south", "3"],["west", "4"],["east", "5"]]), "fence_gate_type");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Fence_gate');
  }
};
Blockly.Python['fence_gate_blk'] = function(block) {
  var fence_gate_type_val = block.getFieldValue('fence_gate_type');
  var code='';
  code = 'block.Block(107,'+fence_gate_type_val+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};  
//**************
Blockly.Blocks['door_wood_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("DOOR WOOD");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Door');
  }
};
Blockly.Python['door_wood_blk'] = function(block) { 
  var code = "block.Block(64)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['door_iron_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("DOOR IRON");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Door');
  }
};
Blockly.Python['door_iron_blk'] = function(block) { 
  var code = "block.Block(71)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['glass_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("GLASS");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Glass');
  }
};
Blockly.Python['glass_blk'] = function(block) { 
  var code = "block.Block(20)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['glass_pane_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("GLASS PANE");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Glass_pane');
  }
};
Blockly.Python['glass_pane_blk'] = function(block) { 
  var code = "block.Block(102)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['craft_tab_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("CRAFTING TABLE");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Crafting_table');
  }
};
Blockly.Python['craft_tab_blk'] = function(block) { 
  var code = "block.Block(58)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['farm_land_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("FARM LAND");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('');
  }
};
Blockly.Python['farm_land_blk'] = function(block) { 
  var code = "block.Block(60)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['fence_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("FENCE");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Fence');
  }
};
Blockly.Python['fence_blk'] = function(block) { 
  var code = "block.Block(85)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['stone_brick_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/block-icon.png", 15, 15, "*"))
        .appendField("STONE BRICK ")
         .appendField(new Blockly.FieldDropdown([["Stone", "0"],["Mossy", "1"],["Cracked", "2"],["Chiseled", "3"]]), "stone_brick_type");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Stone_brick');
  }
};
Blockly.Python['stone_brick_blk'] = function(block) {
  var stone_brick_type_val = block.getFieldValue('stone_brick_type');
  var code='';
  code = 'block.Block(98,'+stone_brick_type_val+')';
  return [code, Blockly.Python.ORDER_ATOMIC];
};  
//**************
Blockly.Blocks['glow_stone'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/glow_stone.png", 15, 15, "*"))
        .appendField("GLOWING STONE");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Glowstone');
  }
};
Blockly.Python['glow_stone'] = function(block) { 
  var code = "block.Block(89)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['glow_obsidian'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/glow_obsidian.png", 15, 15, "*"))
        .appendField("GLOWING OBSIDIAN");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Glowing_Obsidian');
  }
};
Blockly.Python['glow_obsidian'] = function(block) { 
  var code = "block.Block(246)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['redstone_ore'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/redstone_ore.png", 15, 15, "*"))
        .appendField("REDSTONE ORE");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Redstone_Ore');
  }
};
Blockly.Python['redstone_ore'] = function(block) { 
  var code = "block.Block(73)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['gold_ore'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/gold_ore.png", 15, 15, "*"))
        .appendField("GOLD ORE");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Gold_ore');
  }
};
Blockly.Python['gold_ore'] = function(block) { 
  var code = "block.Block(14)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['iron_ore'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/iron_ore.png", 15, 15, "*"))
        .appendField("IRON ORE");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Iron_ore');
  }
};
Blockly.Python['iorn_ore'] = function(block) { 
  var code = "block.Block(15)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['coal_ore'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/coal_ore.png", 15, 15, "*"))
        .appendField("COAL ORE");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Coal_ore');
  }
};
Blockly.Python['coal_ore'] = function(block) { 
  var code = "block.Block(16)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['diamond_ore'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/diamond_ore.png", 15, 15, "*"))
        .appendField("DIAMOND ORE");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Diamond_ore');
  }
};
Blockly.Python['diamond_ore'] = function(block) { 
  var code = "block.Block(56)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['lapis_ore'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/lapis_ore.png", 15, 15, "*"))
        .appendField("LAPIS LAZULI ORE");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Lapis_lazuli_ore');
  }
};
Blockly.Python['lapis_ore'] = function(block) { 
  var code = "block.Block(21)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['lapis_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/lapis_blk.png", 15, 15, "*"))
        .appendField("LAPIS LAZULI");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Lapis_lazuli_block');
  }
};
Blockly.Python['lapis_blk'] = function(block) { 
  var code = "block.Block(22)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************
Blockly.Blocks['diamond_blk'] = {
  init: function() {
    this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(new Blockly.FieldImage("/images/icons/diamond_blk.png", 15, 15, "*"))
        .appendField("DIAMOND");
    this.setOutput(true);
    this.setColour(60);
    this.setTooltip('');
    this.setHelpUrl('http://minecraft.gamepedia.com/Diamond_block');
  }
};
Blockly.Python['diamond_blk'] = function(block) { 
  var code = "block.Block(57)";
  return [code, Blockly.Python.ORDER_NONE];
};    
//*****************





