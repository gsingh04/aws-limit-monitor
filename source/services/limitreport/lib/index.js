/*********************************************************************************************************************
 *  Copyright 2016 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Amazon Software License (the "License"). You may not use this file except in compliance        *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://aws.amazon.com/asl/                                                                                    *
 *                                                                                                                    *
 *  or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

/**
 * @author Solution Builders
 */

'use strict';

let AWS = require('aws-sdk');
let LimitReport = require('./limit-report.js');
const LOGGER = new(require('./logger'))();

module.exports.respond = function(event, cb) {

  // get SQS message and add to DynamoDB table
  let _limitReport = new LimitReport();
  _limitReport.updateReport(event, function(err, data) {
    if (err) {
      LOGGER.log('ERROR', err);
      return cb(err, null);
    }

    return (null, data);
  });

};
