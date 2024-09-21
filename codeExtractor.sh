#!/bin/bash

# 첫 번째 인수로 받은 경로
SEARCH_DIR="$1"

# 두 번째 인수로 받은 파일명
OUTPUT_FILE="$2.code.txt"

# 세 번째 이후 인수로 받은 제외할 폴더 목록
EXCLUDE_DIRS=("${@:3}")

# Output file 초기화
> "$OUTPUT_FILE"

# 재귀적으로 파일을 탐색하는 함수
find_files() {
  local current_dir="$1"
  
  # 현재 디렉토리의 파일과 폴더 목록
  for item in "$current_dir"/*; do
    if [ -f "$item" ]; then
      # 파일인 경우 확장자 확인 후 출력
      case "$item" in
        (*.ts|*.tsx|*.css|*.html)
          echo "File: $item" >> "$OUTPUT_FILE"
          cat "$item" >> "$OUTPUT_FILE"
          echo -e "\n" >> "$OUTPUT_FILE"
          ;;
      esac
    elif [ -d "$item" ]; then
      # 폴더인 경우 제외 폴더 목록 확인
      local skip=0
      for exclude in "${EXCLUDE_DIRS[@]}"; do
        if [[ "$(basename "$item")" == "$exclude" ]]; then
          skip=1
          break
        fi
      done

      # 제외 폴더가 아닌 경우 재귀적으로 탐색
      if [ $skip -eq 0 ]; then
        find_files "$item"
      fi
    fi
  done
}

# 검색 시작
find_files "$SEARCH_DIR"