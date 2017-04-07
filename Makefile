BIN_DIR ?= node_modules/.bin

.PHONY: bootstrap

bootstrap:
	@echo "+ $@"
	npm install --no-progress --silent --depth 0

run:
	@echo "+ $@"
	@$(BIN_DIR)/react-native run-ios

clean:
	@echo "+ $@"
	@rm -rf -node_modules

test:
	@echo "+ $@"
	@echo "NOT IMPLEMENTED YET"

lint:
	@echo "+ $@"
	@$(BIN_DIR)/xo

lint-fix:
	@echo "+ $@"
	@$(BIN_DIR)/xo --fix

flow:
	@echo "+ $@"
	@$(BIN_DIR)/flow
