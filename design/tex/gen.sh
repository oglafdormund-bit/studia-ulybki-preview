while IFS='|' read -r name ar prompt; do
  [ -z "$name" ] && continue
  out=$(higgsfield generate create z_image --aspect_ratio "$ar" --prompt "$prompt" --wait 2>&1 | grep -oE 'https://[^ "]+\.(png|jpg|jpeg|webp)' | head -1)
  if [ -n "$out" ]; then curl -s -o "$name.${out##*.}" "$out"; echo "ok $name"; else echo "fail $name"; fi
done < prompts.txt
higgsfield account status
