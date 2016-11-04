'use strict';
/* globals $, app */

define('admin/plugins/enix', ['settings'], function(Settings) {

	var ACP = {};

	ACP.init = function() {
		Settings.load('enix', $('.enix-settings'));

		$('#save').on('click', function() {
			Settings.save('enix', $('.enix-settings'), function() {
				app.alert({
					type: 'success',
					alert_id: 'enix-saved',
					title: 'Settings Saved',
					message: 'Enix settings saved'
				});
			});
		});
	};

	return ACP;
});