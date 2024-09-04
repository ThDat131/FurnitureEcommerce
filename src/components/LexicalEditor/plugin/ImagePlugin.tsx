import React, { useRef, useState } from "react";
import PhotoIcon from '@mui/icons-material/Photo';
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { $createImageNode } from "../nodes/ImageNode";
import { $insertNodes } from "lexical";
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, IconButton, TextField } from "@mui/material";

export default function ImagePlugin() {
  const [isOpen, setIsOpen] = useState(false);
  const [url, setURL] = useState("");
  const [file, setFile] = useState<File>();
  const inputRef = useRef<HTMLInputElement>(null);

  const [editor] = useLexicalComposerContext();

  const onAddImage = () => {
    let src = "";
    if (url) src = url;
    if (file) src = URL.createObjectURL(file);

    editor.update(() => {
      const node = $createImageNode({ src, altText: "Dummy text" });
      $insertNodes([node]);
    });

    setFile(undefined);
    setURL("");
    setIsOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={() => setIsOpen(true)}
      >
        <PhotoIcon />
      </IconButton>
      <input
        type="file"
        ref={inputRef}
        accept="image/*"
        style={{ display: "none" }}
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            setFile(file);
          }
          e.target.files = null;
        }}
      />
      {isOpen && (
        <Dialog open={isOpen} onClose={() => setIsOpen(false)}>
          <DialogTitle>
            Thêm hình ảnh
          </DialogTitle>
          <DialogContent>
            <TextField
              value={url}
              onChange={(e) => setURL(e.target.value)}
              placeholder="Add Image URL"
              fullWidth
            />
            <Button
              sx={{ mt: 2 }}
              onClick={() => inputRef?.current?.click()}
            >
              {file ? file.name : "Tải ảnh lên"}
            </Button>
          </DialogContent>
          <DialogActions>
            <Button
              sx={{ mt: 2 }}
              disabled={!url && !file}
              onClick={onAddImage}
            >
              Thêm hình ảnh
            </Button>

          </DialogActions>
        </Dialog>
      )}
    </>
  );
}
