
/**
 * SpeakerRecognitionAPILib
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io ) on 11/04/2017
 */
var BaseModel = require("./BaseModel");
/**
 * Creates an instance of RetrieveAListOfAllModelsResponse
 *
 * @constructor
 */
RetrieveAListOfAllModelsResponse = function (obj) {
    if(!obj) {
        this.id = null;     
        this.name = null;     
        this.createdAt = null;     
        this.gender = null;     
        this.mixtures = null;     
        this.ubmId = null;     
        this.ubmName = null;     
        this.numExamples = null;     
        this.trainingSource = null;     
        this.quality = null;     
        //Append to variable dictionary
        this._variableDict['createdAt'] = 'created_at';
        this._variableDict['ubmId'] = 'ubm_id';
        this._variableDict['ubmName'] = 'ubm_name';
        this._variableDict['numExamples'] = 'num_examples';
        this._variableDict['trainingSource'] = 'training_source';
    } else {
        this.id = (obj.id !== undefined && obj.id !== null)? obj.id : null;
        this.name = (obj.name !== undefined && obj.name !== null)? obj.name : null;
        this.createdAt = (obj.created_at !== undefined && obj.created_at !== null)? obj.created_at : null;
        this.gender = (obj.gender !== undefined && obj.gender !== null)? obj.gender : null;
        this.mixtures = (obj.mixtures !== undefined && obj.mixtures !== null)? obj.mixtures : null;
        this.ubmId = (obj.ubm_id !== undefined && obj.ubm_id !== null)? obj.ubm_id : null;
        this.ubmName = (obj.ubm_name !== undefined && obj.ubm_name !== null)? obj.ubm_name : null;
        this.numExamples = (obj.num_examples !== undefined && obj.num_examples !== null)? obj.num_examples : null;
        this.trainingSource = (obj.training_source !== undefined && obj.training_source !== null)? obj.training_source : null;
        this.quality = (obj.quality !== undefined && obj.quality !== null)? obj.quality : null;
        //Append to variable dictionary
        this._variableDict['createdAt'] = 'created_at';
        this._variableDict['ubmId'] = 'ubm_id';
        this._variableDict['ubmName'] = 'ubm_name';
        this._variableDict['numExamples'] = 'num_examples';
        this._variableDict['trainingSource'] = 'training_source';
    }
};

RetrieveAListOfAllModelsResponse.prototype = new BaseModel();
RetrieveAListOfAllModelsResponse.prototype.constructor = RetrieveAListOfAllModelsResponse;

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
RetrieveAListOfAllModelsResponse.prototype.getId = function() {
    return this.id;
};

/**
 * Setter for Id
 * 
 * @param {string} value 
 */
RetrieveAListOfAllModelsResponse.prototype.setId = function(value) {
    this.id = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
RetrieveAListOfAllModelsResponse.prototype.getName = function() {
    return this.name;
};

/**
 * Setter for Name
 * 
 * @param {string} value 
 */
RetrieveAListOfAllModelsResponse.prototype.setName = function(value) {
    this.name = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
RetrieveAListOfAllModelsResponse.prototype.getCreatedAt = function() {
    return this.createdAt;
};

/**
 * Setter for CreatedAt
 * 
 * @param {string} value 
 */
RetrieveAListOfAllModelsResponse.prototype.setCreatedAt = function(value) {
    this.createdAt = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
RetrieveAListOfAllModelsResponse.prototype.getGender = function() {
    return this.gender;
};

/**
 * Setter for Gender
 * 
 * @param {string} value 
 */
RetrieveAListOfAllModelsResponse.prototype.setGender = function(value) {
    this.gender = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
RetrieveAListOfAllModelsResponse.prototype.getMixtures = function() {
    return this.mixtures;
};

/**
 * Setter for Mixtures
 * 
 * @param {int} value 
 */
RetrieveAListOfAllModelsResponse.prototype.setMixtures = function(value) {
    this.mixtures = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
RetrieveAListOfAllModelsResponse.prototype.getUbmId = function() {
    return this.ubmId;
};

/**
 * Setter for UbmId
 * 
 * @param {string} value 
 */
RetrieveAListOfAllModelsResponse.prototype.setUbmId = function(value) {
    this.ubmId = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
RetrieveAListOfAllModelsResponse.prototype.getUbmName = function() {
    return this.ubmName;
};

/**
 * Setter for UbmName
 * 
 * @param {string} value 
 */
RetrieveAListOfAllModelsResponse.prototype.setUbmName = function(value) {
    this.ubmName = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
RetrieveAListOfAllModelsResponse.prototype.getNumExamples = function() {
    return this.numExamples;
};

/**
 * Setter for NumExamples
 * 
 * @param {int} value 
 */
RetrieveAListOfAllModelsResponse.prototype.setNumExamples = function(value) {
    this.numExamples = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {string}
 */
RetrieveAListOfAllModelsResponse.prototype.getTrainingSource = function() {
    return this.trainingSource;
};

/**
 * Setter for TrainingSource
 * 
 * @param {string} value 
 */
RetrieveAListOfAllModelsResponse.prototype.setTrainingSource = function(value) {
    this.trainingSource = value;
};

/**
 * TODO: Write general description for this method
 *
 * @return {int}
 */
RetrieveAListOfAllModelsResponse.prototype.getQuality = function() {
    return this.quality;
};

/**
 * Setter for Quality
 * 
 * @param {int} value 
 */
RetrieveAListOfAllModelsResponse.prototype.setQuality = function(value) {
    this.quality = value;
};


module.exports = RetrieveAListOfAllModelsResponse;