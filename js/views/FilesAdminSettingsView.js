'use strict';

var
	_ = require('underscore'),
	ko = require('knockout'),
	
	Types = require('modules/CoreClient/js/utils/Types.js'),
	
	ModulesManager = require('modules/CoreClient/js/ModulesManager.js'),
	CAbstractSettingsFormView = ModulesManager.run('AdminPanelClient', 'getAbstractAdminPanelFormViewClass'),
	
	Settings = require('modules/%ModuleName%/js/Settings.js')
;

/**
* @constructor
*/
function CFilesAdminSettingsView()
{
	CAbstractSettingsFormView.call(this, Settings.ServerModuleName);
	/* Editable fields */
	this.enableUploadSizeLimit = ko.observable(Settings.EnableUploadSizeLimit);
	this.uploadSizeLimitMb = ko.observable(Settings.UploadSizeLimitMb);
	/*-- Editable fields */
}

_.extendOwn(CFilesAdminSettingsView.prototype, CAbstractSettingsFormView.prototype);

CFilesAdminSettingsView.prototype.ViewTemplate = '%ModuleName%_FilesAdminSettingsView';

CFilesAdminSettingsView.prototype.getCurrentValues = function()
{
	return [
		this.enableUploadSizeLimit(),
		this.uploadSizeLimitMb()
	];
};

CFilesAdminSettingsView.prototype.revertGlobalValues = function()
{
	this.enableUploadSizeLimit(Settings.EnableUploadSizeLimit);
	this.uploadSizeLimitMb(Settings.UploadSizeLimitMb);
};

CFilesAdminSettingsView.prototype.getParametersForSave = function ()
{
	return {
		'EnableUploadSizeLimit': this.enableUploadSizeLimit(),
		'UploadSizeLimitMb': Types.pInt(this.uploadSizeLimitMb())
	};
};

/**
 * @param {Object} oResponse
 * @param {Object} oRequest
 */
CFilesAdminSettingsView.prototype.applySavedValues = function (oParameters)
{
//	Settings.update(oParameters.EnableUploadSizeLimit, oParameters.UploadSizeLimitMb);
};

module.exports = new CFilesAdminSettingsView();
