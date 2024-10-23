# devenv.nix
{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
    buildInputs = [
    pkgs.nodejs             
    pkgs.git               
    pkgs.vue                            
  ];

  shellHook = ''

    export NODE_ENV=development

    echo "Postrocket development environmet"

    if [ ! -d node_modules ]; then
      echo "Installing dependencies..."
      npm install
    fi

    npm run dev
  '';
}