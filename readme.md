This repository has been copied from [sshniro/line-segmentation-algorithm-to-gcp-vision](https://github.com/sshniro/line-segmentation-algorithm-to-gcp-vision) 
  but modified to be able to use in web browser and included dependencies.

#### Usage:
``` lang-html
<script type="module">
    import * as algo from './line-segmentation-algorithm-to-gcp-vision.js';


    window.addEventListener('DOMContentLoaded', (event) => {
        let data = {};// this data is the response from Google Vision API. The data must contain `responses` property inside.
        console.log(algo.initLineSegmentation(data['responses'][0]));
    });
</script>
```

#### Credits:
* [sshniro/line-segmentation-algorithm-to-gcp-vision](https://github.com/sshniro/line-segmentation-algorithm-to-gcp-vision)
* [sasaplus1/deepcopy.js](https://github.com/sasaplus1/deepcopy.js)
* [point-in-polygon](https://www.npmjs.com/package/point-in-polygon)