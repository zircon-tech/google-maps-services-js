/**
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { Language, Place, RequestParams, ResponseData } from "../common";
export interface PlaceDetailsRequest extends Partial<AxiosRequestConfig> {
    params: {
        /** A textual identifier that uniquely identifies a place, returned from a Place Search. */
        place_id: string;
        /**
         * The language code, indicating in which language the results should be returned, if possible.
         * Note that some fields may not be available in the requested language.
         * Note that we often update supported languages so this list may not be exhaustive.
         */
        language?: Language;
        /**
         * The region code, specified as a ccTLD (country code top-level domain) two-character value.
         * Most ccTLD codes are identical to ISO 3166-1 codes, with some exceptions.
         * This parameter will only influence, not fully restrict, results.
         * If more relevant results exist outside of the specified region, they may be included.
         * When this parameter is used, the country name is omitted from the resulting `formatted_address`
         * for results in the specified region.
         */
        region?: string;
        /**
         * A random string which identifies an autocomplete session for billing purposes.
         * Use this for Place Details requests that are called following an autocomplete request in the same user session
         */
        sessiontoken?: string;
        /**
         * One or more fields, specifying the types of place data to return, separated by a comma.
         *
         * **Warning: If you do not specify at least one field with a request, or if you omit the **fields**
         * parameter from a request, ALL possible fields will be returned, and you will be billed accordingly.
         * This applies only to Place Details requests.
         */
        fields?: string[];
        /**
         * The sorting method to use when returning reviews. Can be set to most_relevant (default) or newest.
         * For most_relevant (default), reviews are sorted by relevance; the service will bias the results to return reviews originally written in the preferred language.
         * For newest, reviews are sorted in chronological order; the preferred language does not affect the sort order.
         * Google recommends that you display how the reviews are being sorted to the end user.
         */
        reviews_sort?: string;
        /**
         * Specify reviews_no_translations=true to disable translation of reviews; specify reviews_no_translations=false to enable translation of reviews. Reviews are returned in their original language.
         * If omitted, or passed with no value, translation of reviews is enabled. If the language parameter was specified in the request, use the specified language as the preferred language for translation. If language is omitted, the API attempts to use the Accept-Language header as the preferred language.
         */
        reviews_no_translations?: boolean;
    } & RequestParams;
}
export interface PlaceDetailsResponseData extends ResponseData {
    result: Place;
    /** contains a set of attributions about this listing which must be displayed to the user. */
    html_attributions: string[];
}
export interface PlaceDetailsResponse extends AxiosResponse {
    data: PlaceDetailsResponseData;
}
export declare const defaultUrl = "https://maps.googleapis.com/maps/api/place/details/json";
export declare const defaultParamsSerializer: (params: Record<string, any>) => string;
export declare function placeDetails({ params, method, url, paramsSerializer, ...config }: PlaceDetailsRequest, axiosInstance?: AxiosInstance): Promise<PlaceDetailsResponse>;
