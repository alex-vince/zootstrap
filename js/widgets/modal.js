( function( $, window, undefined )
{

	'use strict';


	var Wednesday = window.Wednesday = window.Wednesday || {};
	Wednesday.Ui = Wednesday.Ui || {};
	Wednesday.Ui.Widget = Wednesday.Ui.Widget || {};

	

	Wednesday.Ui.Widget.Modal = function( $container, config, init )
	{

		this.$body = $( 'body' );
		this.$container = $container;
		this.config = config;
		
		this.modalName = config.modalName;
		this.theatreName = config.modalTheatreName;

		this.$theatre = new Wednesday.Ui.Widget.Theatre( this.theatreName );
		this.template = ( init !== true ? this.modalName : config.template );
		this.data = config.data;
	
		this.addListeners();

		if ( init )
		{
			this.render();
		}
		
	};


	Wednesday.Ui.Widget.Modal.prototype.addListeners = function()
	{

		var that = this;


		this.$container.on( 'click', function( e )
		{

			e.preventDefault();
			that.render();

		} );


		this.$body.on( 'click', '.close', function( e )
		{

			e.preventDefault();

			var $theatre = that.$body.find( '.' + that.theatreName );

			if ( $theatre )
			{	
				$theatre.remove();
			}

		} );

	};


	Wednesday.Ui.Widget.Modal.prototype.removeListeners = function()
	{

		this.$container.off( 'click' );
		this.$body.off( 'click', '.close' );

	};


	Wednesday.Ui.Widget.Modal.prototype.render = function()
	{

		var tmpl = Wednesday.Util.Template.fetch( this.template, this.data ),
		html = this.$theatre.html( tmpl );
		
		this.$body.append( html );

	};

	Wednesday.Ui.Widget.Modal.prototype.activate = function()
	{

		this.addListeners();

	};


	Wednesday.Ui.Widget.Modal.prototype.deactivate = function()
	{

		this.removeListeners();
		
	};


} )( this.jQuery , this, undefined );
