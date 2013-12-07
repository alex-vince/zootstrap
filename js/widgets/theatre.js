( function( $, window, undefined )
{

	'use strict';


	var Wednesday = window.Wednesday = window.Wednesday || {};
	Wednesday.Ui = Wednesday.Ui || {};
	Wednesday.Ui.Widget = Wednesday.Ui.Widget || {};


	Wednesday.Ui.Widget.Theatre = function( className )
	{

		var $theatre = $( '<div class="' + className + '">' );
		return $theatre;

	};


} )( this.jQuery, this, undefined );
