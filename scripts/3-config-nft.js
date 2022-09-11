import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const editionDrop = sdk.getEditionDrop(
  "0x20761e32C04Be2cdbCC1c1Fa83Aa4087B600518B"
);

(async () => {
  try {
    await editionDrop.createBatch([
      {
        name: "Psyduck Doll",
        description: "This NFT will give you access to PsyduckDAO!",
        image: readFileSync("scripts/assets/doll.jpg"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})();
