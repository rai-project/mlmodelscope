import fetchImport from './fetchImport';

export default {
  BVLC_AlexNet_1_0: fetchImport('./layers/BVLC-AlexNet_1.0.json'),
  BVLC_GoogLeNet_1_0: fetchImport('./layers/BVLC-GoogLeNet_1.0.json'),
  BVLC_Reference_CaffeNet_1_0: fetchImport(
    './layers/BVLC-Reference-CaffeNet_1.0.json'
  ),
  BVLC_Reference_RCNN_ILSVRC13_1_0: fetchImport(
    './layers/BVLC-Reference-RCNN-ILSVRC13_1.0.json'
  ),
  Inception_3_0: fetchImport('./layers/Inception_3.0.json'),
  Inception_4_0: fetchImport('./layers/Inception_4.0.json'),
  ResNet101_1_0: fetchImport('./layers/ResNet101_1.0.json'),
  ResNet101_2_0: fetchImport('./layers/ResNet101_2.0.json'),
  ResNeXt50_32x4d_1_0: fetchImport('./layers/ResNeXt50-32x4d_1.0.json'),
  SqueezeNet_1_0: fetchImport('./layers/SqueezeNet_1.0.json'),
  SqueezeNet_1_1: fetchImport('./layers/SqueezeNet_1.1.json'),
  VGG16_1_0: fetchImport('./layers/VGG16_1.0.json'),
  VGG19_1_0: fetchImport('./layers/VGG19_1.0.json'),
  WRN50_2_0: fetchImport('./layers/WRN50_2.0.json')
};
