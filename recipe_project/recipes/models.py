from django.db import models

# Create your models here.
class Recipe(models.Model):
    name = models.CharField(max_length=255)
    minutes = models.IntegerField()
    nutrition = models.JSONField()
    steps = models.JSONField()
    description = models.TextField()
    ingredients = models.JSONField()

    def __str__(self):
        return self.name