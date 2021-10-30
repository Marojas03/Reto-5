package com.ciclo3.reto4.service;

import com.ciclo3.reto4.model.Category;
import com.ciclo3.reto4.repository.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepository categoryRepository;

    public List<Category> getAll() {
        return categoryRepository.getAll();
    }

    public Optional<Category> getCategory(int id) {
        return  categoryRepository.getCategory(id);
    }

    public Category save(Category p){
        if(p.getId() == null){
            return categoryRepository.save(p);
        }else{
            Optional<Category> categoryOptional = categoryRepository.getCategory(p.getId());
            if(categoryOptional.isEmpty()){
                return categoryRepository.save(p);
            }else{
                return p;
            }
        }
    }

    public Category update(Category c){
        if(c.getId()!=null){
            Optional<Category>g=categoryRepository.getCategory(c.getId());
            if(!g.isEmpty()){
                if(c.getName()!=null){
                    g.get().setName(c.getName());
                }
                if(c.getDescription() !=null){
                    g.get().setDescription(c.getDescription());
                }
                return categoryRepository.save(g.get());
            }
        }
        return c;
    }

    public boolean deleteCategory(int id){
        Optional<Category> c = getCategory(id);
        if(!c.isEmpty()){
            categoryRepository.delete((c.get()));
            return true;
        }
        return false;
    }
}