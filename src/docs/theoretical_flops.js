import fetchImport from './fetchImport';

export default {
  BVLC_AlexNet_1_0: fetchImport('./theoretical_flops/BVLC-AlexNet_1.0.json'),
  BVLC_GoogLeNet_1_0: fetchImport(
    './theoretical_flops/BVLC-GoogLeNet_1.0.json'
  ),
  BVLC_Reference_CaffeNet_1_0: fetchImport(
    './theoretical_flops/BVLC-Reference-CaffeNet_1.0.json'
  ),
  BVLC_Reference_RCNN_ILSVRC13_1_0: fetchImport(
    './theoretical_flops/BVLC-Reference-RCNN-ILSVRC13_1.0.json'
  ),
  Inception_3_0: fetchImport('./theoretical_flops/Inception_3.0.json'),
  Inception_4_0: fetchImport('./theoretical_flops/Inception_4.0.json'),
  ResNet101_1_0: fetchImport('./theoretical_flops/ResNet101_1.0.json'),
  ResNet101_2_0: fetchImport('./theoretical_flops/ResNet101_2.0.json'),
  ResNeXt50_32x4d_1_0: fetchImport(
    './theoretical_flops/ResNeXt50-32x4d_1.0.json'
  ),
  SqueezeNet_1_0: fetchImport('./theoretical_flops/SqueezeNet_1.0.json'),
  SqueezeNet_1_1: fetchImport('./theoretical_flops/SqueezeNet_1.1.json'),
  VGG16_1_0: fetchImport('./theoretical_flops/VGG16_1.0.json'),
  VGG19_1_0: fetchImport('./theoretical_flops/VGG19_1.0.json'),
  WRN50_2_0: fetchImport('./theoretical_flops/WRN50_2.0.json')
};
