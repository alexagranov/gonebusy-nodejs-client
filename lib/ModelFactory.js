/**
 * gonebusy
 *
 * This file was automatically generated by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const UpdateUserByIdResponse = require('../lib/Models/UpdateUserByIdResponse');
const GetUserByIdResponse = require('../lib/Models/GetUserByIdResponse');
const CreateUserResponse = require('../lib/Models/CreateUserResponse');
const GetUsersResponse = require('../lib/Models/GetUsersResponse');
const DeleteServiceByIdResponse = require('../lib/Models/DeleteServiceByIdResponse');
const UpdateServiceByIdResponse = require('../lib/Models/UpdateServiceByIdResponse');
const UpdateUserByIdBody = require('../lib/Models/UpdateUserByIdBody');
const CreateUserBody = require('../lib/Models/CreateUserBody');
const UpdateServiceByIdBody = require('../lib/Models/UpdateServiceByIdBody');
const CreateServiceBody = require('../lib/Models/CreateServiceBody');
const UpdateResourceByIdBody = require('../lib/Models/UpdateResourceByIdBody');
const UpdateBookingByIdBody = require('../lib/Models/UpdateBookingByIdBody');
const CreateResourceBody = require('../lib/Models/CreateResourceBody');
const CreatePricingModelBody = require('../lib/Models/CreatePricingModelBody');
const CreateCategoryBody = require('../lib/Models/CreateCategoryBody');
const CreateBookingBody = require('../lib/Models/CreateBookingBody');
const UpdatePricingModelByIdBody = require('../lib/Models/UpdatePricingModelByIdBody');
const GetServiceByIdResponse = require('../lib/Models/GetServiceByIdResponse');
const EntitiesServiceResponse = require('../lib/Models/EntitiesServiceResponse');
const GetServiceAvailableSlotsByIdResponse =
  require('../lib/Models/GetServiceAvailableSlotsByIdResponse');
const CreateServiceResponse = require('../lib/Models/CreateServiceResponse');
const GetServicesResponse = require('../lib/Models/GetServicesResponse');
const EntitiesScheduleResponse = require('../lib/Models/EntitiesScheduleResponse');
const SearchQueryResponse = require('../lib/Models/SearchQueryResponse');
const DeleteScheduleTimeWindowByIdResponse =
  require('../lib/Models/DeleteScheduleTimeWindowByIdResponse');
const UpdateScheduleTimeWindowByIdResponse =
  require('../lib/Models/UpdateScheduleTimeWindowByIdResponse');
const EntitiesAvailabilityResponse = require('../lib/Models/EntitiesAvailabilityResponse');
const CreateScheduleTimeWindowResponse = require('../lib/Models/CreateScheduleTimeWindowResponse');
const DeleteScheduleByIdResponse = require('../lib/Models/DeleteScheduleByIdResponse');
const GetScheduleByIdResponse = require('../lib/Models/GetScheduleByIdResponse');
const CreateScheduleResponse = require('../lib/Models/CreateScheduleResponse');
const GetSchedulesResponse = require('../lib/Models/GetSchedulesResponse');
const DeleteResourceByIdResponse = require('../lib/Models/DeleteResourceByIdResponse');
const UpdateResourceByIdResponse = require('../lib/Models/UpdateResourceByIdResponse');
const GetResourceByIdResponse = require('../lib/Models/GetResourceByIdResponse');
const GetResourceThingsResponse = require('../lib/Models/GetResourceThingsResponse');
const CreateResourceResponse = require('../lib/Models/CreateResourceResponse');
const GetResourcesResponse = require('../lib/Models/GetResourcesResponse');
const EntitiesUserResponse = require('../lib/Models/EntitiesUserResponse');
const UpdatePricingModelByIdResponse = require('../lib/Models/UpdatePricingModelByIdResponse');
const GetPricingModelByIdResponse = require('../lib/Models/GetPricingModelByIdResponse');
const CreatePricingModelResponse = require('../lib/Models/CreatePricingModelResponse');
const GetPricingModelsResponse = require('../lib/Models/GetPricingModelsResponse');
const GetCategoryByIdResponse = require('../lib/Models/GetCategoryByIdResponse');
const CreateCategoryResponse = require('../lib/Models/CreateCategoryResponse');
const GetCategoriesResponse = require('../lib/Models/GetCategoriesResponse');
const CancelBookingByIdResponse = require('../lib/Models/CancelBookingByIdResponse');
const UpdateBookingByIdResponse = require('../lib/Models/UpdateBookingByIdResponse');
const GetBookingByIdResponse = require('../lib/Models/GetBookingByIdResponse');
const CreateBookingResponse = require('../lib/Models/CreateBookingResponse');
const GetBookingsResponse = require('../lib/Models/GetBookingsResponse');
const EntitiesThingTypeResponse = require('../lib/Models/EntitiesThingTypeResponse');
const EntitiesSearchResponse = require('../lib/Models/EntitiesSearchResponse');
const EntitiesSlots = require('../lib/Models/EntitiesSlots');
const EntitiesResourceResponse = require('../lib/Models/EntitiesResourceResponse');
const EntitiesResourceAvailabilities = require('../lib/Models/EntitiesResourceAvailabilities');
const EntitiesPricingModelResponse = require('../lib/Models/EntitiesPricingModelResponse');
const EntitiesCategoryResponse = require('../lib/Models/EntitiesCategoryResponse');
const EntitiesBookingResponse = require('../lib/Models/EntitiesBookingResponse');
const EntitiesAddressEntity = require('../lib/Models/EntitiesAddressEntity');
const EntitiesTimeWindowResponse = require('../lib/Models/EntitiesTimeWindowResponse');
const CreateScheduleBody = require('../lib/Models/CreateScheduleBody');
const CreateScheduleTimeWindowBody = require('../lib/Models/CreateScheduleTimeWindowBody');
const UpdateScheduleTimeWindowByIdBody = require('../lib/Models/UpdateScheduleTimeWindowByIdBody');
const EntitiesErrorException = require('../lib/Exceptions/EntitiesErrorException');

const classMap = {
    UpdateUserByIdResponse,
    GetUserByIdResponse,
    CreateUserResponse,
    GetUsersResponse,
    DeleteServiceByIdResponse,
    UpdateServiceByIdResponse,
    UpdateUserByIdBody,
    CreateUserBody,
    UpdateServiceByIdBody,
    CreateServiceBody,
    UpdateResourceByIdBody,
    UpdateBookingByIdBody,
    CreateResourceBody,
    CreatePricingModelBody,
    CreateCategoryBody,
    CreateBookingBody,
    UpdatePricingModelByIdBody,
    GetServiceByIdResponse,
    EntitiesServiceResponse,
    GetServiceAvailableSlotsByIdResponse,
    CreateServiceResponse,
    GetServicesResponse,
    EntitiesScheduleResponse,
    SearchQueryResponse,
    DeleteScheduleTimeWindowByIdResponse,
    UpdateScheduleTimeWindowByIdResponse,
    EntitiesAvailabilityResponse,
    CreateScheduleTimeWindowResponse,
    DeleteScheduleByIdResponse,
    GetScheduleByIdResponse,
    CreateScheduleResponse,
    GetSchedulesResponse,
    DeleteResourceByIdResponse,
    UpdateResourceByIdResponse,
    GetResourceByIdResponse,
    GetResourceThingsResponse,
    CreateResourceResponse,
    GetResourcesResponse,
    EntitiesUserResponse,
    UpdatePricingModelByIdResponse,
    GetPricingModelByIdResponse,
    CreatePricingModelResponse,
    GetPricingModelsResponse,
    GetCategoryByIdResponse,
    CreateCategoryResponse,
    GetCategoriesResponse,
    CancelBookingByIdResponse,
    UpdateBookingByIdResponse,
    GetBookingByIdResponse,
    CreateBookingResponse,
    GetBookingsResponse,
    EntitiesThingTypeResponse,
    EntitiesSearchResponse,
    EntitiesSlots,
    EntitiesResourceResponse,
    EntitiesResourceAvailabilities,
    EntitiesPricingModelResponse,
    EntitiesCategoryResponse,
    EntitiesBookingResponse,
    EntitiesAddressEntity,
    EntitiesTimeWindowResponse,
    CreateScheduleBody,
    CreateScheduleTimeWindowBody,
    UpdateScheduleTimeWindowByIdBody,
    EntitiesErrorException,
};

/**
 * Factory class to create instances of models and exception classes
 */
class ModelFactory {
    /**
     * Creates instance of a model class
     * @param  modelName  {string}  Name of class to instantiate
     * @returns  {object} Instance of the model class
     */
    static getInstance(modelName) {
        return new classMap[modelName]();
    }
}

module.exports = ModelFactory;
