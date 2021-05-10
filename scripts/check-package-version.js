const path = require("path");
const fs = require("fs");

const main = () => {
  try {
    const branchVersion = process.argv[2];
    const package = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), "package.json"), "utf-8")
    );
    const packageVersion = package.version ? `v${package.version}` : undefined;

    console.log(`Branch Ver: ${branchVersion}, Package Ver: ${packageVersion}`);

    if (!branchVersion) {
      throw Error("Branch Version is not found");
    }
    if (!packageVersion) {
      throw Error("Package Version is not found");
    }
    if (branchVersion !== packageVersion) {
      throw Error("Branch and Package versions do not match");
    }

    process.exit(0);
  } catch (error) {
    console.error(`error: ${error.message || "unknown"}.`);
    process.exit(1);
  }
};

main();
