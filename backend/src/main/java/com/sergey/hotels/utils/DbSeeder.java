package com.sergey.hotels.utils;

import com.sergey.hotels.dao.HotelRepository;
import com.sergey.hotels.dto.Address;
import com.sergey.hotels.dto.Hotel;
import com.sergey.hotels.dto.Review;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.util.Arrays;
import java.util.List;

@Component
public class DbSeeder implements CommandLineRunner {
    private HotelRepository hotelRepository;

    public DbSeeder(HotelRepository hotelRepository) {
        this.hotelRepository = hotelRepository;
    }

    @Override
    public void run(String... strings) throws Exception {
        Hotel marriot = new Hotel(
                "Marriot 456123",
                20,
                new Address("Moscow", "Russia"),
                Arrays.asList(
                        new Review("Sergey", 8, false),
                        new Review("Bill", 5, true)
                )
        );

        Hotel ibis = new Hotel(
                "libs",
                50,
                new Address("Paris", "France"),
                Arrays.asList(
                        new Review("Kate", 8, true),
                        new Review("Kaily", 10, true)
                )
        );

        Hotel sofitel = new Hotel(
                "sofitel",
                40,
                new Address("London", "England"),
                Arrays.asList()
        );

        // drop all hotels
        this.hotelRepository.deleteAll();

        //add hotels
        List<Hotel> hotels = Arrays.asList(marriot, ibis, sofitel);
        this.hotelRepository.saveAll(hotels);
    }
}
