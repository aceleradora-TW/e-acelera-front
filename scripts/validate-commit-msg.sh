#!/bin/sh

COMMIT_MSG_FILE=$1
COMMIT_MSG=$(cat $COMMIT_MSG_FILE)
REGEX="^(feat|fix|docs|style|refactor|test|chore): .+"

if ! echo "$COMMIT_MSG" | grep -qE "$REGEX"; then
  echo "❌ Mensagem de commit inválida!"
  echo "💡 O commit deve seguir o padrão: <tipo>: <descrição>"
  echo "Exemplos válidos:"
  echo "  feat: adiciona nova funcionalidade"
  echo "  fix: corrige um bug"
  echo "  docs: atualiza documentação"
  exit 1
fi

exit 0;