{
  pkgs,
  lib,
  config,
  ...
}:
{
  # Astro uses Node.js and npm; the version is pinned to match .nvmrc (v26).
  # See https://devenv.sh/languages/javascript/
  languages = {
    javascript.enable = true;
    javascript.package = pkgs.nodejs_26;
    javascript.npm.enable = true;
    # Installs dependencies automatically when entering the shell.
    javascript.npm.install.enable = true;
    typescript.enable = true;
  };

  # Optional: shortcuts equivalent to the package.json scripts.
  scripts = {
    dev.exec = "npm run dev";
    build.exec = "npm run build";
    check.exec = "npm run check";
    test.exec = "npm run test";
    lint.exec = "npm run lint";
  };

  # See full reference at https://devenv.sh/reference/options/
}
