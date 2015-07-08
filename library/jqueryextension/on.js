//use: 
//$.prototype.each
//$.prototype.data

(function($){
	
	$.prototype.extend({
		on:bindEvent,
		off:unBindEvent
	});
	
	function bindEvent(eventName,eventHandler){
		var $elements=this;
		
		$elements.each(function(){
			var htmlElement=this;
			
			htmlElement.addEventListener(eventName,eventHandler,false);
			$(htmlElement).data(eventName,eventHandler);
		});
		
		return this;
	}
	
	function unBindEvent(eventName){
		var $elements=this,
			eventHandler=$elements.data(eventName);
		
		$elements.each(function(){
			var htmlElement=this;
			
			htmlElement.removeEventListener(eventName,eventHandler,false);
		});
		
		return this;
	}
}(jQuery));