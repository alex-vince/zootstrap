( function( $, window, document, undefined ) 
{

	'use strict';

	//Localise Globals
	var console 						= window.console || undefined;

	var Wednesday 					= window.Wednesday = window.Wednesday || {};
			Wednesday.Ui 				= Wednesday.Ui || {};
			Wednesday.Ui.Widget = Wednesday.Ui.Widget || {};


	Wednesday.Ui.Widget.Modal = function( $container, config )
	{

		this.$body = $( 'body' );
		this.$container = $container;
		this.config = config;
		
		this.modalName = config.modalName;
		this.theatreName = config.modalTheatreName;

		this.$theatre = new Wednesday.Ui.Widget.Theatre( this.theatreName );

		this.$content = this.$body.find( '#' + this.modalName );
	
		this.addListeners();
		
	}


	Wednesday.Ui.Widget.Modal.prototype.addListeners = function()
	{

		var that = this;


		this.$container.on( 'click', function( e) {

			e.preventDefault();
			that.render();

		} );


		this.$body.on( 'click', '.close', function( e ) {

			e.preventDefault();

			var $theatre = that.$body.find( '.' + that.theatreName );

			if ( $theatre )
			{
				$theatre.remove();
			}

		} );

	}

	Wednesday.Ui.Widget.Modal.prototype.removeListeners = function()
	{

		this.$container.off( 'click' );
		this.$body.off( 'click', '.close');

	}


	Wednesday.Ui.Widget.Modal.prototype.render = function()
	{

		var clone = this.$content.html()
		  , html = this.$theatre.html( clone );
		
		this.$body.append( html );

	}

	Wednesday.Ui.Widget.Modal.prototype.activate = function()
	{

		this.addListeners();

	}


	Wednesday.Ui.Widget.Modal.prototype.deactivate = function()
	{

		this.removeListeners();
		
	}


} )( jQuery , window, document, undefined );
