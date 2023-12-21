export type fileMapType = {
  [key in fileNameType]: fileMimeType;
};

export type fileNameType = 'jpg' | 'jpeg' | 'svg' | 'gif' | 'png' | 'ttf';
export type fileMimeType = 'image' | 'font';
