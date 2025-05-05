![snowplow-logo](.github/media/snowplow_logo.png)

# Example Next.js Ecommerce Store for Snowplow

[![License][license-image]][license]

An example retail & ecommerce store, powered by Next.js and instrumented with partial Snowplow tracking.

## Running locally

1. `npm install`
2. Fill the environment variables required in a local env file. `cp .env.example .env.local`
  - Make sure to setup a unique `NEXT_PUBLIC_SNOWPLOW_APP_ID` for your team
3. `npm run dev`

## Implementing tracking with Snowtype

1. Export the `SNOWPLOW_CONSOLE_API_KEY` and `SNOWPLOW_CONSOLE_API_KEY_ID` variables in your environment
  - Generate a key for yourself here: https://console.snowplowanalytics.com/88f3b704-a2fe-4fc4-86a5-8595641f8aa6/credentials
2. Run `npx @snowplow/snowtype patch -p <your_data_product_id_here>`
3. Run `npx @snowplow/snowtype generate`

This will generate the code for your Data Product into `lib/tracking` - now you need to implement this function in the codebase to start tracking events!

Search through the `src/components` to locate the logical place to implement your specific tracking call (like a "sign-in" event) and then:

1. Import the associated tracking function `import { track<your_event>Spec } from "@/lib/tracking/snowplow";`
2. Issue the `track<your_event>Spec` call to track that event

With your site active locally navigate through the flow that you added tracking on and check that it issues the expected tracking calls.  If this has been done right you should see it show up in Snowflake within the next couple of seconds.

## Where to start customising?

There is already some partial Snowplow tracking added to this example Ecommerce store. Here are some file locations that you might like to play around with:

#### src/lib/snowplow/snowplow.ts 
- Update the tracker configuration settings with your own
- Add automatic, out-of-the-box Page Pings, Link Clicks, Button Clicks and Form Tracking

#### src/components/home/index.tsx
- Sending your own custom, self-describing event based on a Snowplow schema you define

## Project support

Please note the code in this project is provided for your exploration only, and are not formally supported by Snowplow with Service Level Agreements (SLAs). Solutions accelerators are provided AS-IS and we do not make any guarantees of any kind. Please do not submit a support ticket relating to any issues arising from the use of these projects. The source in this project is provided subject to the license set forth below. All included or referenced third party libraries are subject to the licenses set forth below.

Any issues discovered through the use of this project should be filed as GitHub Issues on the repo. They will be reviewed as time permits, but there are no formal SLAs for support.

## Copyright and license

Example Next.js Ecommerce Store for Snowplow is copyright 2024-present Snowplow Analytics Ltd.

Licensed under the [Apache License, Version 2.0][license] (the "License");
you may not use this software except in compliance with the License.

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

[license]: https://www.apache.org/licenses/LICENSE-2.0
[license-image]: https://img.shields.io/github/license/snowplow/snowplow-android-tracker
