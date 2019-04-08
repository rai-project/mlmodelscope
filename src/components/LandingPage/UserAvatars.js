import React, { Component } from "react";

import Avatar from "avataaars";

export const ModelUser = function({ width, height }) {
  return (
    <Avatar
      style={{ width: width || "100px", height: height || "100px" }}
      avatarStyle="Transparent"
      avatarBackground="#19263a"
      topType="ShortHairShortCurly"
      accessoriesType="Round"
      hairColor="Auburn"
      facialHairType="Blank"
      clotheType="GraphicShirt"
      clotheColor="Blue03"
      graphicType="Diamond"
      eyeType="Default"
      eyebrowType="Default"
      mouthType="Smile"
      skinColor="Light"
    />
  );
};

export const ModelDeveloper = function({ width, height }) {
  return (
    <Avatar
      style={{ width: width || "100px", height: height || "100px" }}
      avatarStyle="Transparent"
      avatarBackground="#19263a"
      topType="LongHairNotTooLong"
      accessoriesType="Blank"
      hairColor="BrownDark"
      facialHairType="Blank"
      clotheType="BlazerShirt"
      eyeType="Default"
      eyebrowType="Default"
      mouthType="Default"
      skinColor="Light"
    />
  );
};

export const SystemDeveloper = function({ width, height }) {
  return (
    <Avatar
      style={{ width: width || "100px", height: height || "100px" }}
      avatarStyle="Transparent"
      avatarBackground="#19263a"
      topType="ShortHairShortFlat"
      accessoriesType="Prescription02"
      hairColor="BrownDark"
      facialHairType="BeardLight"
      facialHairColor="BrownDark"
      clotheType="Hoodie"
      clotheColor="Blue03"
      eyeType="Default"
      eyebrowType="Default"
      mouthType="Default"
      skinColor="Light"
    />
  );
};
