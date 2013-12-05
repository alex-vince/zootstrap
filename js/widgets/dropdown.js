( function( $, window, document, undefined ) 
{

	'use strict';

	//Localise Globals
	var console 						= window.console || undefined;

	var Wednesday 					= window.Wednesday = window.Wednesday || {};
			Wednesday.Ui 				= Wednesday.Ui || {};
			Wednesday.Ui.Widget = Wednesday.Ui.Widget || {};


	Wednesday.Ui.Widget.Dropdown = function( $container, config )
	{

		this.$container = $container;
		this.config = config;

		this.addListeners();

	}


	Wednesday.Ui.Widget.Dropdown.prototype.addListeners = function()
	{

		var that = this;

		this.$container.on( 'click', function( e ) 
		{

			e.preventDefault();
			that.toggle();

		} );

	}


	Wednesday.Ui.Widget.Dropdown.prototype.removeListeners = function()
	{

		this.$container.off( 'click' );

	}


	Wednesday.Ui.Widget.Dropdown.prototype.toggle = function()
	{

		this.$container.toggleClass( 'open' );

	}


	Wednesday.Ui.Widget.Dropdown.prototype.activate = function()
	{

		this.addListeners();

	}


	Wednesday.Ui.Widget.Dropdown.prototype.deactivate = function()
	{

		this.removeListeners();
		
	}



} )( jQuery , window, document, undefined );
