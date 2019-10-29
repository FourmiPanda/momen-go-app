/* tslint:disable:max-line-length */
/**
 * Get weather data of airports
 * 1.0.0
 * MomenGo API
 * http://localhost/terms/
 * apiteam@momengo.io
 * Apache 2.0
 * http://www.apache.org/licenses/LICENSE-2.0.html
 * localhost/api
 */

export interface Captor {
  /** format: int64 */
  id?: number;
  IATA?: string;
  type?: TypeCaptorEnum;
  /** format: int64 */
  QOS?: number;
}

export type TypeCaptorEnum =
  'temperature' |
  'pressure' |
  'wind';
