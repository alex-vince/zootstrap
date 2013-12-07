( function( $, window, undefined )
{

	'use strict';


	var Wednesday = window.Wednesday = window.Wednesday || {};
	Wednesday.Ui = Wednesday.Ui || {};

	//Localise Globals
	var console = window.console || undefined;


	Wednesday.Ui.WidgetController = function()
	{

		var that = this;

		this.$widgets = $( '[data-wednesday-ui-widget]' );
		this.widgets = [];

		this.$widgets.each( function()
		{

			try
			{

				var $container = $( this ),
				type = $container.attr( 'data-wednesday-ui-widget' ),
				config = {

					modalName : $container.attr( 'data-modal-name' ),
					modalTheatreName : $container.attr( 'data-theatre-name' )

				};

				that.init( $container, type, config );

			}
			catch ( err )
			{

				console.log( 'Wednesday Ui Widget Controller Error: ' + err );

			}

		} );

	};


	Wednesday.Ui.WidgetController.prototype.init = function( $container, type, config )
	{

		switch( type )
		{

			case 'dropdown':
				this.widgets.push( new Wednesday.Ui.Widget.Dropdown( $container, config ) );
				break;

			case 'modal':
				this.widgets.push( new Wednesday.Ui.Widget.Modal( $container, config ) );
				break;

		}

	};


	/**
	 * Init
	 * @return { Object } constructed instance of Widget Controller
	 */
	$( window ).ready( function()
	{

		new Wednesday.Ui.WidgetController();

	} );


} )( this.jQuery , this, undefined );
