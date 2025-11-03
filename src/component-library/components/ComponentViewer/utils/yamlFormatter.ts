// @ts-ignore
import yaml from "js-yaml";

function removeStyleField(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map((item) => removeStyleField(item));
  } else if (obj !== null && typeof obj === "object") {
    const result: any = {};

    for (const [key, value] of Object.entries(obj)) {
      if (key !== "style") {
        result[key] = removeStyleField(value);
      }
    }
    return result;
  }
  return obj;
}

export function formatBlocksYaml(blocks: any, title: string, spacing: string): string {
  if (!blocks) return "";

  try {
    const blocksWithoutStyle = removeStyleField(blocks);

    const frontMatterData = {
      blocks: blocksWithoutStyle,
    };

    const yamlContent = yaml.dump(frontMatterData, {
      indent: 2,
      lineWidth: -1,
      noRefs: true,
      sortKeys: false,
    });

    const trimmedContent = yamlContent.trimEnd();

    return `---\n${trimmedContent}\n---`;
  } catch (error) {
    return "";
  }
}
