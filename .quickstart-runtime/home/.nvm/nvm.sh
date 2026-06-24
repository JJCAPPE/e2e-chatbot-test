nvm() {
  case "$1" in
    install|use)
      if command -v node >/dev/null 2>&1; then
        return 0
      fi
      echo "nvm shim: node is not available on PATH" >&2
      return 1
      ;;
    --version|version)
      echo "windows-node-shim"
      ;;
    *)
      return 0
      ;;
  esac
}

export -f nvm
