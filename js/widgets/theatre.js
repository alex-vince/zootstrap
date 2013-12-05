( function( $, window, document, undefined ) 
{

	'use strict';

	//Localise Globals
	var console 						= window.console || undefined;

	var Wednesday 					= window.Wednesday = window.Wednesday || {};
			Wednesday.Ui 				= Wednesday.Ui || {};
			Wednesday.Ui.Widget = Wednesday.Ui.Widget || {};


	Wednesday.Ui.Widget.Theatre = function( className )
	{

		var $theatre = $( '<div class="' + className + '">' );

		return $theatre;

	}


} )( jQuery , window, document, undefined );
