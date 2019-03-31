import results from "./rawimage_results.json";
import snappyjs from "snappyjs";
import Image from "image-js";

function base64ToUint8Array(base64) {
  var binary_string = atob(base64);
  var len = binary_string.length;
  var bytes = new Uint8Array(len);
  for (var i = 0; i < len; i++) {
    bytes[i] = binary_string.charCodeAt(i);
  }
  return bytes;
}

function read_rawimage_results(features) {
  // ignore data for now and use results
  // const compressed_data = results.responses[0].features[0].raw_image.compressed_data;
  const compressed_data = features[0].raw_image.compressed_data;
  const binary_compressed_data = base64ToUint8Array(compressed_data);
  const jsonBuf = snappyjs.uncompress(binary_compressed_data);

  var enc = new TextDecoder("utf-8");
  const json = enc.decode(jsonBuf);

  var imagedata = JSON.parse(json);
  var width = results.responses[0].features[0].raw_image.width
  var height = results.responses[0].features[0].raw_image.height
  var img = new Image(width, height, imagedata, {kind: "RGB"})
  var rgbaimg = img.rgba8();
  return rgbaimg.toDataURL();
}

export default read_rawimage_results;
