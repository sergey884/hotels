package com.sergey.hotels.controllers;

import com.sergey.hotels.dto.Hotel;
import com.sergey.hotels.dao.HotelRepository;
import com.sergey.hotels.dto.Review;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/hotels")
public class HotelController {
    private HotelRepository hotelRepository;

    public HotelController(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @CrossOrigin
    @GetMapping("/all")
    public List<Hotel> getAll() {
        List<Hotel> hotels = this.hotelRepository.findAll();

        return hotels;
    }

    @CrossOrigin
    @PostMapping("/review")
    public void addNewReview(@RequestBody Review review) {
        System.out.println(review);
    }
}
