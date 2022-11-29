@echo off
for %%f in (
	"*.png"
) do (
	git mv %%f image\card\
)