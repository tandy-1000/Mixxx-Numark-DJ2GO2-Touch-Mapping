CONTROLLER_PATH := ~/.mixxx/controllers/

update:
	yes | cp -rf *.xml *.js $(CONTROLLER_PATH)
