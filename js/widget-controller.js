/**
 * Wednesday.Ui.Widget-Controller.js
 * @author Alexander Vince < alexv@wednesdayagency.com >
 * @date Thursday 28th November 2013
 * @copyright 2013 Wednesday Agency - Alexander Vince < alexv@wednesdayagency.com >
 * @license New BSD License < http://creativecommons.org/licenses/BSD/ >
 *
 *
 * @dependencies jQuery ( $ )
 *
 * 
 * Module Sandbox
 * @param  { jQuery } $ Library
 * @param  { Object } window global
 * @param  { Undefined } undefined
 * @return { False }
 */
( function( $, window, undefined )
{

	/**
	 * Set ECMA5 strict mode
	 */
	'use strict';


	/**
	 * Wednesday Namespace
	 * @type { Object }
	 */
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
				config =
				{

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
