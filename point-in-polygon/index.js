// https://www.npmjs.com/package/point-in-polygon

import {pointInPolygonFlat as pointInPolygonFlat} from './flat.js';
import {pointInPolygonNested as pointInPolygonNested} from './nested.js';

export function pointInPolygon (point, vs, start, end) {
    if (vs.length > 0 && Array.isArray(vs[0])) {
        return pointInPolygonNested(point, vs, start, end);
    } else {
        return pointInPolygonFlat(point, vs, start, end);
    }
}
export const nested = pointInPolygonNested
export const flat = pointInPolygonFlat
