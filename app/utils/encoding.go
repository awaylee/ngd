package utils

import (
    "crypto/md5"
    "encoding/hex"
)

func Encoding_md5(msg string) string{
    m := md5.New()
    m.Write([]byte(msg))
    return hex.EncodeToString(m.Sum(nil))
}
