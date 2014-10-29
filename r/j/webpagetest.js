window.onload = function(){

	function begin(){
		$('input#url').val('mini.wan.sogou.com/v2.4/main/index');
		$('#location').find('option[value="China_Loc"]').attr('selected',true);
		$('#browser').find('option[value="Chrome"]').attr('selected',true);
		$('.start_test').click();
	}
	begin();

};