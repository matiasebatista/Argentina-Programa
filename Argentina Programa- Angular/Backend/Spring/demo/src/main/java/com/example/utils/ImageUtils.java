package com.example.utils;

import java.util.Base64;

import javax.sql.rowset.serial.SerialBlob;
import javax.sql.rowset.serial.SerialException;

import java.sql.Blob;
import java.sql.SQLException;

public class ImageUtils {
    public static Blob base64ToBlob(String foto) throws SerialException, SQLException{
        String sanitizedBase64 = foto.split(",")[1];
        byte[] decodedByte = Base64.getDecoder().decode(sanitizedBase64);
        Blob b = new SerialBlob(decodedByte);
        return b;
    }
}
